import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';

function Hero() {
  return (
    <section className="hero">
      <BackgroundCarousel />
      <div className='hero-content'>
      <h1 className="hero-title">Unleash Your <br />Inner Hero</h1>
      
      <p className="hero-subtitle"> <br />"Not all Heros wear Capes...But you Can"</p>
      <a href="#shop" className="cta-button">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;