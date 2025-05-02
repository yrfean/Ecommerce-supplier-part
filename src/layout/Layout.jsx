import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      {/* sidebar */}
      <div className="absolute">
        <Sidebar />
      </div>
      <div>
        {/* navbar */}
        <div>
          <Navbar />
        </div>
        {/* outlet */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
