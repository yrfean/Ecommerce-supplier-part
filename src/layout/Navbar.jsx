import { Bell, Search, Settings } from "lucide-react";
import BreadCrumbs from "./breadcrumbs/BreadCrumbs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const scrollIntoViewRef = useRef(null);
  const navigate = useNavigate("/my-profile");

  useEffect(() => {
    scrollIntoViewRef.current?.scrollIntoView({ behaviour: "smooth" });
  });
  return (
    <div className="w-full flex justify-between items-center h-[50px]">
      {/* breadcrumbs */}
      <div className="overflow-x-scroll flex w-[370px] overflow-y-hidden custom-scrollbar">
        <BreadCrumbs />
        <div ref={scrollIntoViewRef} />
      </div>

      {/* right hand side things */}
      <div className="flex gap-5 items-center px-4">
        {/* search */}
        <div className="w-[235px] h-[42px] relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none h-full px-3 bg-[#F1F1F1] pr-9 rounded-lg placeholder:text-black"
          />
          <div className="absolute text-black top-[9px] right-[9px]">
            <Search className="w-6 h-6" />
          </div>
        </div>
        {/* settings */}
        <div className="bg-[#F1F1F1] rounded-lg h-[42px] w-[42px] hover:text-[#47BA82] transition-all duration-300 cursor-pointer flex items-center justify-center">
          <Settings className="w-5 h-5" />
        </div>
        {/* notifications */}
        <div className="bg-[#F1F1F1] relative rounded-lg h-[42px] w-[42px] hover:text-[#47BA82] transition-all duration-300 cursor-pointer flex items-center justify-center">
          <div className="h-2 w-2 bg-[#47BA82] absolute top-[10px] right-[12px] rounded-full" />
          <Bell className="w-5 h-5" />
        </div>
        {/* name and supplier */}
        <div
          onClick={() => navigate("/my-profile")}
          className="flex flex-col items-end cursor-pointer"
        >
          <h1 className="font-semibold truncate max-w-[150px]">Pookie🦃🦃🦃</h1>
          <p className="text-sm -mt-1 text-gray-600">Supplier</p>
        </div>
        {/* dp */}
        <div onClick={() => navigate("/my-profile")}>
          <img
            src="/1f97c2b126afc0cc179294ca7e29f74c.jpg"
            alt="user dp"
            className="object-cover w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
