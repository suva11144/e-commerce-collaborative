import React from 'react';

import { useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate(); 
  return (
    <nav className="fixed w-full h-[85px] top-0 z-[1000] bg-[rgba(3,3,3,0.8)] backdrop-blur border-b-2 border-[rgb(24,24,24)]">
      <div className="max-w-[1450px] mx-auto flex justify-between items-center">
        <div className="logo">
          <div className="logo-cape"></div>
          <span className="logo-text">SuperTees</span>
        </div>
        <div className="nav-links">
          <a href="#" className="active">HQ</a>
          <a href="#shop">Hero's Armoury</a>
          <a href="#about"></a>
          {/* <div className="cart-icon">
            <span className="cart-count">0</span>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
            </svg>
          </div> */}
          <button 
           onClick={() => navigate('/auth/register')}
          className='px-6 py-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-full hover:bg-gradient-to-l hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out'>Sign Up</button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;