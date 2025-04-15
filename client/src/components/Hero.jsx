import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate(); 
  return (
    <section className="min-h-[96vh] flex items-center justify-between p-[6rem_4rem] gap-8  overflow-hidden mt-[30px] border-b-2 border-[rgba(0,0,0,0.5)]">
      <BackgroundCarousel />
      <div className='hero-conntent'>
      <h1 style={{ fontFamily: '"Bangers", cursive' }} className="font-deadpool  mt-[9px] text-[4.2rem] uppercase font-[extra-expanded] text-left animate-[title-glow_7s_ease-in-out_infinite]">Unleash <br /> Your <br />Inner Hero</h1>
      
      <p className="hero-subtitle"> <br />"Not all Heros wear Capes...But you Can"</p>
      <button
      onClick={() => navigate('/shop/home')}
      className="inline-block px-12 py-4 bg-gradient-to-r from-blue-900 to-[#7402ff] text-[var(--text)] no-underline rounded-full font-semibold uppercase tracking-wide transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:bg-gradient-to-r hover:from-[#7402ff] hover:to-blue-900 hover:shadow-[5px_2px_5px_#6502b6]  cursor-pointer">Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;