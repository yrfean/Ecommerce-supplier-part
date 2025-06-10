import { Icon } from "@iconify/react/dist/iconify.js";
import { ArrowDown, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const navitems = [
  { name: "Dashbaord", location: "/", icon: "si:dashboard-line" },
  {
    name: "Product",
    location: "/product",
    icon: "fluent-mdl2:product",
    children: [
      { name: "Advertising windows", location: "/product/advertising-windows" },
      { name: "Advance storage", location: "/product/advance-storage" },
      { name: "Expiry list", location: "/product/expiry-list" },
    ],
  },
  {
    name: "Order",
    location: "/order",
    icon: "material-symbols:orders-outline",
  },
  {
    name: "Return Management",
    location: "/Return-management",
    icon: "hugeicons:delivery-return-01",
  },
  {
    name: "Shipping Management",
    location: "/shipping-management",
    icon: "material-symbols:local-shipping-outline-rounded",
  },
  { name: "Offers", location: "/offers", icon: "ic:outline-local-offer" },
  {
    name: "Payment",
    location: "/payments",
    icon: "fluent-mdl2:payment-card",
    children: [
      { name: "Refund", location: "/payments/refund" },
      { name: "Wallet", location: "/payments/wallet" },
      { name: "Accounts ledger", location: "/payments/accounts-ledger" },
    ],
  },
  {
    name: "Partial accept",
    location: "/partial-accept",
    icon: "carbon:delivery-parcel",
  },
  {
    name: "Sales summery",
    location: "/sales-summery",
    icon: "icon-park-outline:sales-report",
  },
  {
    name: "User role",
    location: "/user-role",
    icon: "ph:user-focus-bold",
    children: [
      { name: "Role managemenet", location: "/user-role/role-management" },
    ],
  },
  // {
  //   name: "Configuration",
  //   location: "/configuration",
  //   icon: "lucide:user-cog",
  //   children: [
  //     // { name: "ID configuration", location: "/configuration/iD-configuration" },
  //     { name: "Email", location: "/configuration/email" },
  //   ],
  // },
];

const Sidebar = () => {
  const [location, setLocation] = useState(window.location.pathname);
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  return (
    <div className="bg-[#F1F1F1] h-full rounded-3xl p-2 relative">
      {/* logo */}
      <div className="w-full absolut cursor-pointer flex justify-center items-center mt-7 mb-3">
        <img
          onClick={() => navigate("/")}
          src="/5e9c7c8b3e0a45d341a85e580aa734f6be1127ec.png"
          alt=""
          className="w-[180px] h-[112px]"
        />
      </div>

      {/* navbar items---- */}
      <div className="px-1 mt-[2px] pt-1 h-[470px]  overflow-y-scroll custom-scrollbar">
        {navitems.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <div
                onClick={() => {
                  navigate(item.location);
                  setDrop(false);
                }}
                className={`w-full mb-1 flex transition-all duration-300 text-gray-800 items-center hover:outline-[#A7E6C6] rounded-xl font-semibold gap-2  px-10 h-[43px] relative cursor-pointer ${
                  location === item.location ? "bg-[#47BA82] text-white" : ""
                }`}
              >
                {/* icon */}
                <div className="">
                  <Icon icon={item.icon} className="w-5 h-5" />
                </div>
                <p className="text-nowrap text-sm">{item.name} </p>
                {/* drop icon */}
                {item.children ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(item.location);
                      if (drop === item.name) {
                        setDrop(null);
                      } else {
                        setDrop(item.name);
                      }
                    }}
                    className="absolute right-[15px] top-[15px]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-[#0000009C] transition-all duration-300 ${
                        drop === item.name ? "rotate-180" : ""
                      } ${location === item.location ? "text-white" : ""}`}
                    />
                  </div>
                ) : null}
              </div>
              {drop === item.name
                ? item.children.map((child) => (
                    <div
                      onClick={() => navigate(child.location)}
                      className={`w-full mb-1 flex pl-14 transition-all duration-300 text-nowrap text-gray-800 items-center outline-1 outline-gray-200 hover:outline-[#A7E6C6] rounded-xl font-semibold gap-6   px-10 h-[43px] relative cursor-pointer ${
                        location === child.location
                          ? "bg-[#47BA82] text-white"
                          : ""
                      }`}
                    >
                      - {child.name}
                    </div>
                  ))
                : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
