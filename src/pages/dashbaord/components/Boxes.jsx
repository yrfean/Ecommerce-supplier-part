import { Icon } from "@iconify/react/dist/iconify.js";

import { useEffect } from "react";
import { useGetBoxDetails } from "./../../../Query/dashboard queries/DashboardApi";

const Boxes = () => {
  const { data } = useGetBoxDetails();

  return (
    <div className="flex justify-around">
      {/* today sales */}
      <div className="flex items-center justify-center px-5 gap-5 rounded-lg w-[210px] shadow h-[90px] bg-[#F4FFFA]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#3BC288]"
          />
        </div>
        <div>
          <h1 className="text-[#3BC288] text-xl font-semibold">
            {data?.data.todays_sales_count}
          </h1>
          <p>Today Sales</p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-center px-5 gap-5 rounded-xl w-[210px] shadow h-[90px] bg-[#6DBBF20F]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#6DBAF2]"
          />
        </div>
        <div>
          <h1 className="text-[#6DBAF2] text-xl font-semibold">
            {data?.data.todays_orders_count}
          </h1>
          <p>Today Orders</p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-center px-5 gap-5 rounded-xl w-[210px] shadow h-[90px] bg-[#FFB5B51F]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#FFB4B4]"
          />
        </div>
        <div>
          <h1 className="text-[#FFB4B4] text-xl font-semibold">
            {data?.data.in_stock_count}
          </h1>
          <p>In stock</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 gap-5 rounded-xl w-[210px] shadow h-[90px] bg-[#E6D3FF24]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#DABDFF]"
          />
        </div>
        <div>
          <h1 className="text-[#DABDFF] text-xl font-semibold">
            {data?.data.total_payments}
          </h1>
          <p>Total payments</p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
