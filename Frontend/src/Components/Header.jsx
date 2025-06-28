import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/Authentication';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/src/assets/nsd-logo.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold text-black">
        <Link to="/about" className="hover:text-blue-600">About Us</Link>
        <Link to="/donate" className="hover:text-blue-600">Donate</Link>
        <Link to="/adopt" className="hover:text-blue-600">Adoption</Link>
        <Link to="/community" className="hover:text-blue-600">Blogs</Link>
        <Link to="/volunteer" className="hover:text-blue-600">Volunteering</Link>
        <Link to="/founder" className="hover:text-blue-600">Founder</Link>
        <Link to="/ourTeam" className="hover:text-blue-600">Our Team</Link>
      </nav>

      {/* Right Side: Auth/User */}
      <div className="flex items-center space-x-4 relative">
        {!isAuthenticated() ? (
          <>
            <Link
              to="/signin"
              className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-orange-200 transition hidden md:inline"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition hidden md:inline"
            >
              Signup
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-orange-700 hidden md:inline">{user?.name}</span>
            <div className="relative">
              <img
                src={user?.avatar || '/User Image.jpeg'}
                alt="User"
                className="h-10 w-10 rounded-full object-cover border-2 border-amber-700 cursor-pointer"
                onClick={() => setProfileMenu((v) => !v)}
              />
              {profileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-orange-50 text-gray-700"
                    onClick={() => { setProfileMenu(false); navigate('/profile'); }}
                  >
                    Edit Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-orange-50 text-gray-700"
                    onClick={() => { setProfileMenu(false); signOut(); }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        <a
          href="#shop"
          className="bg-blue-700 text-white px-5 py-2 rounded-full font-bold hover:bg-amber-800 transition"
        >
          Shop
        </a>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50 px-6 py-4 space-y-4 font-medium text-black">
          <Link to="/about" className="block hover:text-blue-600">About Us</Link>
          <Link to="/donate" className="block hover:text-blue-600">Donate</Link>
          <Link to="/adopt" className="block hover:text-blue-600">Adoption</Link>
          <Link to="/community" className="block hover:text-blue-600">Blogs</Link>
          <Link to="/volunteer" className="block hover:text-blue-600">Volunteering</Link>
          <Link to="/founder" className="block hover:text-blue-600">Founder</Link>
          <Link to="/ourTeam" className="block hover:text-blue-600">Our Team</Link>
          {!isAuthenticated() && <Link to="/signin" className="block hover:text-orange-600">Login</Link>}
          {!isAuthenticated() && <Link to="/register" className="block hover:text-orange-600">Signup</Link>}
          {isAuthenticated() && (
            <>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-orange-50 text-gray-700"
                onClick={() => { setMenuOpen(false); navigate('/profile'); }}
              >
                Edit Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-orange-50 text-gray-700"
                onClick={() => { setMenuOpen(false); signOut(); }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
