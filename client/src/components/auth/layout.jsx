
// import { Outlet } from "react-router-dom";


// function AuthLayout() {
//   return (
//       <div className="flex min-h-screen  relative">
//         <div className="flex-1 black flex items-center justify-center ">
//           <Outlet/>
//   </div>

//       </div>
    
//   );
// }
// export default AuthLayout;     


import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function AuthLayout() {
  const [starSeed, setStarSeed] = useState(Math.random());

  useEffect(() => {
    // Update star seed periodically to create random twinkling effect
    const interval = setInterval(() => {
      setStarSeed(Math.random());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen relative bg-[#0a192f]">
      {/* Enhanced animated stars background */}
      <div className="absolute inset-0">
        <div className="stars" style={{ '--star-seed': starSeed }}></div>
        <div className="stars2" style={{ '--star-seed': starSeed }}></div>
        <div className="stars3" style={{ '--star-seed': starSeed }}></div>
        <div className="meteor-container">
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
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
  );
}

export default AuthLayout;
