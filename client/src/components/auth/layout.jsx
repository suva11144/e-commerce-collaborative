import { Outlet } from "react-router-dom";
import spiderMan from "../../assets/SpiderMan.jpg";

function AuthLayout() {
  return (
    <div className="flex min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${spiderMan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;