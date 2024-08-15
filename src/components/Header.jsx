import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (enrollmentNo) {
      navigate(`/students/${enrollmentNo}`);
      setEnrollmentNo('');
    }
  };

  return (
    <header className=" shadow-lg sticky top-0 z-50 bg-white">
      <div className="flex justify-between gap-2 items-center p-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl font-extrabold hover:text-gray-200">
            <img src="/image.png" alt="University" width={200} />
          </Link>
          <nav className="hidden md:flex space-x-6" >
            <Link to="/students" className="hover:text-gray-300 transition">Students</Link>
            <Link to="/faculty" className="hover:text-gray-300 transition">Faculty</Link>
            <Link to="/admin" className="hover:text-gray-300 transition">Admin</Link>
          </nav>
        </div>
        <div className="relative flex items-center">
          <form onSubmit={handleSearch} className="flex ">
            <input
              type="text"
              value={enrollmentNo}
              onChange={(e) => setEnrollmentNo(e.target.value)}
              placeholder="Enrollment No."
              className="rounded-l-full px-4 py-2 bg-gray-100 focus:outline-none input-sm md:input-md w-32 md:w-auto border"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-full border border-blue-700 btn-sm md:btn-md"
            >
              Search
            </button>
          </form>
          <button
            onClick={toggleMenu}
            className="ml-4 focus:outline-none md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <Link
            to="/students"
            className="block py-2 px-4 text-white hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Students
          </Link>
          <Link
            to="/faculty"
            className="block py-2 px-4 text-white hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Faculty
          </Link>
          <Link
            to="/admin"
            className="block py-2 px-4 text-white hover:bg-gray-700"
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
