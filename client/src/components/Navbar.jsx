import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 border-b-2 border-[rgba(24,24,24,0.37)] mb-300">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="text-white font-bold text-xl">BRAND.</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-purple-300">Home</a>
            <a href="#" className="text-white hover:text-purple-300">Catalog</a>
            <a href="#" className="text-white hover:text-purple-300">Gallery</a>
            <a href="#" className="text-white hover:text-purple-300">Contact</a>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;