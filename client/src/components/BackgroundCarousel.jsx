import React, { useState, useEffect } from 'react';
import deadpool from '../assets/deadpool1.jpg'; 
import batman from "../assets/batman.webp";
import marvel1 from "../assets/marvel1.jpg";
import captainAmerica from "../assets/captain-america.jpg"


const images = [
  marvel1,
  deadpool,
  captainAmerica,
  batman
  
];

function BackgroundCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsActive(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className={`carousel-slide ${isActive ? 'active' : ''}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
    </div>
  );
}

export default BackgroundCarousel;