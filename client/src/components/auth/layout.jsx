
import { Outlet } from "react-router-dom";
import marvelImage from '../../assets/spidy.png';


function AuthLayout() {
  return (
      <div className="flex min-h-screen  relative">
        <div className="flex-1 black flex items-center justify-center ">
          <Outlet/>
  </div>

      </div>
    
  );
}
export default AuthLayout;
