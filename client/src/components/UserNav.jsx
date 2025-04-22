import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserNav = () => {

  const navigate = useNavigate();

    return (
        <nav className=" top-0 left-0 right-0 z-50 border-b-1 border-[rgba(111,101,255,0.5)] mb-300 fixed bg-[#942af843] backdrop-blur-3xl h-18">
          <div className="container-custom">
            <div className="flex items-center justify-between py-4 pt-5">
              <div className="text-white font-bold text-xl">BRAND.</div>
              <div className="flex items-center space-x-6 gap-2.5">
                <a href="#" className="text-white hover:text-purple-300">Home</a>
                <a href="#" className="text-white hover:text-purple-300">Catalog</a>
                <a href="#" className="text-white hover:text-purple-300">Gallery</a>
                <a href="#" className="text-white hover:text-purple-300">Contact</a>
                </div>
                <div >
                
              </div>
            </div>
          </div>
        </nav>
      
  );
};

export default UserNav;