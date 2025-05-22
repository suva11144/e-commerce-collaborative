
import {Outlet} from "react-router-dom" 
import AdminHeader from './header'
import AdminSidebar from './sidebar'

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
        {/* Sidebar content goes here */}
        <AdminSidebar></AdminSidebar>
        <div className="flex flex-col flex-2">
            {/*admin header*/}
            <AdminHeader></AdminHeader>
            {/* Main content goes here */}
            <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
                <Outlet></Outlet>
            </main>
        </div>
    </div>
        
  );
}

export default AdminLayout;