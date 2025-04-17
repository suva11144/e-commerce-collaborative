import React, { useEffect } from "react";
import ProductCarousel from "./ProductCarousel";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles




const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-evenly  bg-starry z-10 relative py-35 p-12 container-custom">
      <div className="" data-aos="fade-up">
        <div className="max-w-2xl px-2">
          <h1 className="text-6xl font-bold text-white mb-4 mt-12">
            Superhero Tees:
            <br />
            Unleash Your Inner
            <br />
            Hero!
          </h1>
          <p className="text-gray-300 mb-8 text-lg mt-8">
            Explore Starry Night's Zodiac exclusive superhero collection.
            High-quality, unique designs printed on comfortable fabrics. Express
            your inner hero in style!
          </p>
          <button className="bg-purple-500 text-1xl mt-0.5 text-white px-6 py-3 rounded-md hover:bg-purple-600">
            Shop Now
          </button>
        </div>
      </div>
      <div className="mt-40 w-full" data-aos="fade-up" >
      <ProductCarousel />
      </div>
    </div>
  );
};

export default Hero;
