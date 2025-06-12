import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex  h-screen bg-white p-4">
      <Sidebar />
      {/* Main Content Area with left margin for Sidebar */}
      <div className="flex-1 flex flex-col ml-66">
        <Navbar />
        {/* Dynamic content area (will change based on route) */}
        <main className="pl10 pr4 mt-0 h-full flex-1 overflow-y-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
