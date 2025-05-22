import React from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 z-50 border-b-1 border-[rgba(111,101,255,0.5)] mb-300 fixed bg-[#942af843] backdrop-blur-3xl h-18">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-[rgb(239,231,215)]">THREAD</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[rgb(239,231,215)] hover:text-[rgb(200,190,170)] font-medium">Shop</a>
            <a href="#" className="text-[rgb(239,231,215)] hover:text-[rgb(200,190,170)]">Collections</a>
            <a href="#" className="text-[rgb(239,231,215)] hover:text-[rgb(200,190,170)]">About</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-[rgb(239,231,215)] hover:text-[rgb(200,190,170)]" aria-label="Search">
              <Search size={20} />
            </button>
            <button
              className="relative p-2 text-[rgb(239,231,215)] hover:text-[rgb(200,190,170)] transition-colors"
              aria-label="Open shopping cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[rgb(239,231,215)] text-grey text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="md:hidden p-2 text-gray-700 hover:text-[rgb(200,190,170)]"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Not open in this static version */}
      {/* You can uncomment the below code to see what it looks like when open */}
      {/*
      <div className="fixed inset-0 z-50 bg-white pt-16">
        <div className="p-4">
          <button className="absolute top-4 right-4 p-2 text-gray-700">
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-6 text-center mt-8">
            <a href="#" className="text-xl font-medium text-[rgb(200,190,170)]">Shop</a>
            <a href="#" className="text-xl text-gray-600">Collections</a>
            <a href="#" className="text-xl text-gray-600">About</a>
            <a href="#" className="text-xl text-gray-600">Contact</a>
          </nav>
        </div>
      </div>
      */}
    </header>
  );
};

export default Header;
