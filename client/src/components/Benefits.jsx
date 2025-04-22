import React from 'react';
import marvelImage from "../assets/marvel2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Benefits = () => {

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);



  return (
    <div className="relative py-16">
    {/* Background Image with low opacity */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${marvelImage})` }}
    ></div>

    {/* Foreground Content */}
    <div className="relative z-10 container-custom">
      <div className="flex items-center justify-between">
        <div className="max-w-md" data-aos="fade-right">
          <h2 className="text-4xl font-bold text-white mb-4" >
            Discover the Benefits <br />
            of Starry Night Tees <br />
            Exclusive Designs!
          </h2>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-md hover:bg-gray-100 mt-4">
            Explore More
          </button>
        </div>
      
          
          <div className="bg-black rounded-lg p-4 w-[300px]" data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Featured Product"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <h3 className="text-white text-sm mb-2">Featured Superhero T-Shirt Limited Edition!</h3>
            <div className="flex justify-between items-center">
              <span className="text-purple-400">$35</span>
              <button onClick={()=>{
                navigate("/shop")
              }} className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-600">
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;