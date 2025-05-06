import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => { 
  return (
    <div className="w-screen h-screen relative p-3 overflow-x-hidden">
      {/* sidebar */}
      <div className="fixed w-[270px] px- pb-6 py- h-full">
        <Sidebar />
      </div>
      {/* other than sidebar */}
      <div className="ml-[290px]">
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
