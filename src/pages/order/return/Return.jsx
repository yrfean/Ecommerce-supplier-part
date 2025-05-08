import React, { useState } from "react";
import OrdersTable from "../components/OrdersTable";

const boxOrderStatus = [
  {
    title: "Pending",
    quatity: "25",
    outline: "outline outline-[#47BA8266]",
    bg: "bg-[#F4FFFA]",
    qColor: "text-[#3BC288]",
  },
  {
    title: "Approved",
    quatity: "15",
    bg: "bg-[#6DBBF20F]",
    outline: "outline outline-[#6DBBF2A3]",
    qColor: "text-[#6DBBF2A3]",
  },
  {
    title: "Rejected",
    quatity: "10",
    bg: "bg-[#FFB5B51F]",
    outline: "outline outline-[#FFB5B582]",
    qColor: "text-[#FFB4B4]",
  },
];

const titles = [
  "SI.No",
  "Return ID",
  "Product Name",
  "Category",
  "Return Reason",
  "Quantity",
  "Status",
];

const returnOrderDetails = [
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
];

const Return = () => {
  const [todayOrHistory, setTOdayOrHistory] = useState("today");

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mt-1 mb-6">Return Item Management</h1>

      {/* boxes */}
      <div className="grid grid-cols-3 gap-8">
        {boxOrderStatus.map((o) => (
          <div
            className={`${o.outline} ${o.bg} rounded-lg h-[60px] flex items-center justify-center gap-5`}
          >
            <p className="text-xl font-semibold">{o.title} </p>
            <p className={`text-2xl ${o.qColor} font-semibold`}>{o.quatity} </p>
          </div>
        ))}
      </div>
      {/* today or histiory */}
      <div className="bg-[#F8F8F8] px-4 mt-3 w-full rounded-lg p-2 h-[60px] items-center flex justify-between">
        <div className="space-x-5">
          <button
            onClick={() => setTOdayOrHistory("today")}
            className={`font-semibold w-[120px]  cursor-pointer transition-all duration-300 ${
              todayOrHistory === "today"
                ? "bg-white py-2 rounded-lg shadow text-[#47BA82]"
                : "text-gray-600"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setTOdayOrHistory("history")}
            className={`font-semibold w-[120px] cursor-pointer transition-all duration-300 ${
              todayOrHistory === "history"
                ? "bg-white py-2 rounded-lg shadow text-[#47BA82]"
                : "text-gray-600"
            }`}
          >
            History
          </button>
        </div>
      </div>
      {/* table */}
      <div>
        <OrdersTable
          ordersDetails={returnOrderDetails}
          titles={titles}
          trueOrFalse={true}
        />
      </div>
    </div>
  );
};

export default Return;
