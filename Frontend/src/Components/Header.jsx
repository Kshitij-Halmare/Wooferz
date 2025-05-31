import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-2 bg-white shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src="/Wooferz Logo.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
      </div>

      {/* Center: Navigation */}
      <nav className="flex gap-8">
        <a href="#about" className="no-underline text-gray-900 font-semibold">About Us</a>
        <a href="#adoption" className="no-underline text-gray-900 font-semibold">Adoption</a>
        <a href="#blogs" className="no-underline text-gray-900 font-semibold">Blogs</a>
        <a href="#volunteering" className="no-underline text-gray-900 font-semibold">Volunteering</a>
      </nav>

      {/* Right: Shop, User Profile */}
      <div className="flex items-center gap-5">
        <a href="#shop" className="bg-amber-700 text-white px-5 py-2 rounded-full font-bold shadow">Shop</a>
        <img src="User Image.jpeg" alt="User Profile" className="h-10 w-10 rounded-full object-cover border-2 border-amber-700" />
      </div>
    </header>
  )
}

export default Header