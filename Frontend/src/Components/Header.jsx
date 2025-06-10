import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react or use SVGs directly
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/logo.png" // Update this path
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold text-black">
        <Link to="/about" className="hover:text-blue-600 flex items-center">
          About<span className="ml-1 text-lg">{'>'}</span>
        </Link>
        <Link to="/donate" className="hover:text-blue-600">Donate</Link>
        <Link to="/adopt" className="hover:text-blue-600">Adopt</Link>
        <Link to="/blog" className="hover:text-blue-600">Blog</Link>
        <Link to="/volunteer" className="hover:text-blue-600">Volunteer</Link>
        <Link to="/founder" className="hover:text-blue-600">Founder</Link>
        <Link to="/ourTeam" className="hover:text-blue-600">Our Team</Link>
      </nav>

      {/* Shop Button + User Avatar */}
      <div className="flex items-center space-x-4">
        <a
          href="#shop"
          className="bg-blue-700 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-800 transition"
        >
          Shop Now
        </a>
        <img
          src="/user.png" // Update with actual user avatar URL
          alt="User"
          className="h-10 w-10 rounded-full object-cover border border-gray-300"
        />

        {/* Hamburger for Mobile */}
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
          <Link to="/about" className="block hover:text-blue-600">About</Link>
          <Link to="/donate" className="block hover:text-blue-600">Donate</Link>
          <Link to="/adopt" className="block hover:text-blue-600">Adopt</Link>
          <Link to="/blog" className="block hover:text-blue-600">Blog</Link>
          <Link to="/volunteer" className="block hover:text-blue-600">Volunteer</Link>
          <Link to="/founder" className="block hover:text-blue-600">Founder</Link>
          <Link to="/ourTeam" className="block hover:text-blue-600">Our Team</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
