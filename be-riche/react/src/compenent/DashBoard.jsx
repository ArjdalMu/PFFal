import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  const [name, setName] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setIsNavbarFixed(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white border-b shadow-sm ${
        isNavbarFixed ? 'fixed top-0 left-0 right-0 animate-fade-in' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-black text-lg font-bold">Be riche</div>
          <div className="flex items-center">
            <Link to='/login' className="text-white text-sm px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">
              Login
            </Link>
            <Link  to ='/' className="text-blue-700 text-sm px-4 py-2 rounded-md border border-blue-700 hover:text-white hover:bg-blue-700 ml-4">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
