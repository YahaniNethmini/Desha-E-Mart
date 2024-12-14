import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";

function AdminLayout() {
    return ( 
        <div className="flex w-full min-h-screen">
            {/* admin side bar */}
            <AdminSidebar />
            <div className="flex flex-col flex-1">
                {/* admin header */}
                <AdminHeader />
                {/* main content */}
                <main className="flex flex-1 p-4 bg-muted/40 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
     );
}

export default AdminLayout;