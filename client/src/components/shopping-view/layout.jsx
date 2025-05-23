import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


function ShoppingViewLayout() {
  const [starSeed, setStarSeed] = useState(Math.random());

  useEffect(() => {
    // Update star seed periodically to create random twinkling effect
    const interval = setInterval(() => {
      setStarSeed(Math.random());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="flex min-h-screen relative bg-[#0a192f] ">
      {/* Enhanced animated stars background */}
      <div className="absolute inset-0">
        <div className="star" style={{ '--star-seed': starSeed }}></div>
        <div className="star2" style={{ '--star-seed': starSeed }}></div>
        <div className="star3" style={{ '--star-seed': starSeed }}></div>
        <div className="meteors-container">
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  );
}

export default ShoppingViewLayout;
