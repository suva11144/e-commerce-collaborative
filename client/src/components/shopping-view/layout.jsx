import { Outlet } from "react-router-dom";
import ShoppingHeader from './header'   

function ShoppingViewLayout() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
        {/* common header */}
        <ShoppingHeader></ShoppingHeader>
      <main className="flex flex-col w-full flex-1 ">
        <Outlet></Outlet>
        
      </main>
    </div>
  );
}
export default ShoppingViewLayout;