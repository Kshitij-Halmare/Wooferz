import React, { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Create both contexts for compatibility
const AuthContext = createContext();
const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = localStorage.getItem('blog_user_token');
    const allProfiles = JSON.parse(localStorage.getItem('blog_user_profiles') || '{}');

    if (storedToken) {
      try {
        setToken(storedToken);
        const decoded = jwtDecode(storedToken);
        let userObj = {
          _id: decoded._id || decoded.id || decoded.userId,
          name: decoded.name || decoded.username,
          email: decoded.email,
          avatar: decoded.avatar || decoded.profileImage || '/default-avatar.png',
          ...decoded
        };
        if (userObj.email && allProfiles[userObj.email]) {
          userObj = { ...userObj, ...allProfiles[userObj.email] };
        }
        setUser(userObj);
        console.log('User authenticated:', decoded);
      } catch (error) {
        console.error('Invalid token', error);
        localStorage.removeItem('blog_user_token');
        setUser(null);
        setToken(null);
      }
    } else {
      setUser(null);
      setToken(null);
    }
    setLoading(false);
  }, [navigate, location]);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      // Set user with proper structure for your blog component
      let userData = {
        _id: decoded._id || decoded.id || decoded.userId,
        name: decoded.name || decoded.username,
        email: decoded.email,
        avatar: decoded.avatar || decoded.profileImage || '/default-avatar.png',
        ...decoded
      };
      // Merge with any saved profile edits for this email
      const allProfiles = JSON.parse(localStorage.getItem('blog_user_profiles') || '{}');
      if (userData.email && allProfiles[userData.email]) {
        userData = { ...userData, ...allProfiles[userData.email] };
      }
      setUser(userData);
      setToken(token);
      localStorage.setItem('blog_user_token', token);
      toast.success('Login successful!');
    } catch (error) {
      console.error('Login failed: invalid token', error);
      toast.error('Login failed: Invalid token');
    }
  };

  // Update user and persist by email
  const updateUser = (userData) => {
    setUser(prevUser => {
      const updatedUser = {
        ...prevUser,
        ...userData
      };
      // Save updated user to localStorage by email
      if (updatedUser.email) {
        const allProfiles = JSON.parse(localStorage.getItem('blog_user_profiles') || '{}');
        allProfiles[updatedUser.email] = updatedUser;
        localStorage.setItem('blog_user_profiles', JSON.stringify(allProfiles));
      }
      return updatedUser;
    });
  };

  // Add signOut function (was missing in previous patch)
  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('blog_user_token');
    // Do NOT remove blog_user_profiles, so user edits persist for next login
    toast.success('Signed out successfully');
    navigate('/signin');
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null && token !== null;
  };

  // Get authorization headers for API calls
  const getAuthHeaders = () => {
    if (!token) {
      return {};
    }
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin inline-block w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full"></div>
      </div>
    );
  }

  const contextValue = {
    user,
    token,
    login,
    signOut,
    setUser,
    updateUser,
    loading,
    isAuthenticated,
    getAuthHeaders
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};

// Export both hooks for compatibility
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context;
};

// Export contexts for direct usage (like in your blog component)
export { AuthContext, UserContext };

// Default export for convenience
export default AuthProvider;