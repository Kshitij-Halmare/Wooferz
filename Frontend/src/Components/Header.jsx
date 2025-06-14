import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/Wooferz Logo.jpg" // Or replace with your actual logo path
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
        <Link to="/blog" className="hover:text-blue-600">Blogs</Link>
        <Link to="/volunteer" className="hover:text-blue-600">Volunteering</Link>
        <Link to="/founder" className="hover:text-blue-600">Founder</Link>
        <Link to="/ourTeam" className="hover:text-blue-600">Our Team</Link>
      </nav>

      {/* Shop Button + User Avatar + Hamburger */}
      <div className="flex items-center space-x-4">
        <a
          href="#shop"
          className="bg-amber-700 text-white px-5 py-2 rounded-full font-bold hover:bg-amber-800 transition"
        >
          Shop
        </a>
        <img
          src="/User Image.jpeg" // Replace with actual user avatar if needed
          alt="User"
          className="h-10 w-10 rounded-full object-cover border-2 border-amber-700"
        />
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
          <Link to="/blog" className="block hover:text-blue-600">Blogs</Link>
          <Link to="/volunteer" className="block hover:text-blue-600">Volunteering</Link>
          <Link to="/founder" className="block hover:text-blue-600">Founder</Link>
          <Link to="/ourTeam" className="block hover:text-blue-600">Our Team</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
