import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">University Portal</Link>
        </h1>
        <nav className="hidden md:flex space-x-6">
          <Link to="/students" className="hover:text-gray-400">Students</Link>
          <Link to="/faculty" className="hover:text-gray-400">Faculty</Link>
          <Link to="/admin" className="hover:text-gray-400">Admin</Link>
        </nav>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <Link
            to="/students"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Students
          </Link>
          <Link
            to="/faculty"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Faculty
          </Link>
          <Link
            to="/admin"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
