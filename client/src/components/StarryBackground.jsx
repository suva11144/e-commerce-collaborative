import { useState, useEffect } from "react";

function StarryBackground() {
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
      {/* Enhanced animated stars background */}
        <div className="stars" style={{ '--star-seed': starSeed }}></div>
        <div className="stars2" style={{ '--star-seed': starSeed }}></div>
        <div className="stars3" style={{ '--star-seed': starSeed }}></div>
        <div className="meteor-container">
          <div className="shooting-star"></div>
          
          <div className="shooting-star"></div>
          
          <div className="shooting-star"></div>
        </div>
    </>
  );
}

export default StarryBackground;
