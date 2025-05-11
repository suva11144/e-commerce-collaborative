import React from "react";
import { useNavigate } from "react-router-dom";

import { Search, User } from "lucide-react"; // Import specific icons
const UserNav = () => {
  const navigate = useNavigate();

  return (
    <nav className=" top-0 left-0 right-0 z-50 border-b-1 border-[rgba(111,101,255,0.5)] mb-300 fixed bg-[#942af843] backdrop-blur-3xl h-18">
      <div className="container-custom justify-between">
        <div className="flex items-center justify-between py-4 pt-5">
          <div className="text-white font-bold text-xl">BRAND.</div>
          <div className="flex items-center space-x-6 gap-2.5">
            <a href="#" className="text-white hover:text-purple-300">
              Shop
            </a>
            <a href="#" className="text-white hover:text-purple-300">
             Collections
            </a>
            <a href="#" className="text-white hover:text-purple-300">
             About
            </a>
          </div>
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Search for products..."
              className="px-12 py-1.5 w-full rounded-full bg-transparent border border-purple-400 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-200"
            />
          </div>
          <div>
            <div className="flex items-center  bg-purple-600 rounded-full px-2.5 py-2 hover:bg-purple-600 transition duration-300 ease-in-out">
              <a
                href="#"
                className="text-white hover:text-purple-300 flex items-center gap-2"
              >
                <User size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
