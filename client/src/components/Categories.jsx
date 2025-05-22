import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="py-12 bg-gradient-to-b from-black/35 to-black/45" >
      <div className="container-custom" data-aos="fade-left">
        <h2 className="text-white text-2xl mb-12">Tee Categories</h2>
        <div class="grid grid-cols-3 gap-4 max-w-5xl mx-auto p-4">
  <div class="col-span-1 row-span-2">
    <img src="your-image1.jpg" alt="Hiker" class="w-full h-full object-cover rounded-lg" />
  </div>

  <div class="col-span-2">
    <img src="your-image2.jpg" alt="Milky Way" class="w-full h-48 object-cover rounded-lg" />
  </div>

  <div class="grid grid-cols-2 col-span-2 gap-4">
    <img src="your-image3.jpg" alt="Meteor" class="w-full h-48 object-cover rounded-lg" />
    <img src="your-image4.jpg" alt="Vogue Store" class="w-full h-48 object-cover rounded-lg" />
  </div>
        <div className="mt-8">
          <button onClick={()=>{
            navigate("/shop/home")
          }} className="bg-purple-500 text-white text-lg font-medium px-7 py-2 w-[150px] rounded-md hover:bg-purple-600 cursor-pointer">
            Shop
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categories;