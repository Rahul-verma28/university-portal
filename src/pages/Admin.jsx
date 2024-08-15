import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-extrabold mb-4">Admin Dashboard</h2>
      <p className="text-lg mb-6">Manage and oversee Admin activities</p>
      <div className='flex gap-5'>
        <div className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg">
          Coming Soon
        </div>
        <Link to="/" className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg">
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default Admin;
