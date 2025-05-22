import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Description = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="py-12 bg-gradient-to-b from-transparent to-black/35"  >
      <div className="container-custom">
        <p className="text-white text-left max-w-2xl text-lg mt-8"  data-aos="fade-right">
          Starry Night Tees offers unique superhero-themed apparel with a cosmic twist. We provide high-quality, comfortable t-shirts that allow you to express your inner hero. Explore our exclusive designs and join the Starry Night community.
        </p>
        <div className="mt-4">
          <a href="#" className="text-purple-400 hover:text-purple-300">
            About Us →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;