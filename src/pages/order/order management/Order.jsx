import React, { useState } from "react";
import FilterOrSorting from "../../../components/FilterOrSorting";
import { ArrowDownZA, Funnel, Search } from "lucide-react";
import OrdersTable from "../components/OrdersTable";

const boxorderStatus = [
  {
    title: "New Order",
    quantity: 25,
    bg: "bg-[#F3FFFA]",
    noBg: "bg-[#47BA82]",
  },
  { title: "Shipped", quantity: 34, bg: "bg-[#FFFFEE]", noBg: "bg-[#FFDE6A]" },
  {
    title: "Delivered",
    quantity: 14,
    bg: "bg-[#EEF4FF]",
    noBg: "bg-[#88A4FF]",
  },
  {
    title: "Cancelled",
    quantity: 10,
    bg: "bg-[#FFF3F8]",
    noBg: "bg-[#E79EBB]",
  },
];

const orderDetails = [
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
  ["01", "ID 678978", "Demo name", "Category", "Order Error", "500", "Shipped"],
];
const titles = [
  "SI no",
  "Order ID",
  "Product Name",
  "Category",
  "Dispatch Date",
  "Quantity",
  "Exp.Dt",
];



const Order = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold my-1 mb-5">Order Managemment</h1>

      {/* boxes */}
      <div className="w-full grid gap-3 grid-cols-4 mb-3">
        {boxorderStatus.map((order) => (
          <div
            className={`${order.bg} rounded-lg h-[90px] flex items-center justify-center gap-5`}
          >
            <p className="font-semibold text-xl">{order.title} </p>
            <div
              className={`${order.noBg} rounded-full flex items-center justify-center aspect-square min-w-11 p-2 text-center`}
            >
              <p className="text-xl text-white font-semibold">
                {order.quantity}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* table*/}
      <div className="w-full mt-6">
        <OrdersTable
          ordersDetails={orderDetails}
          titles={titles}
          trueOrFalse={true}
        />
      </div>
    </div>
  );
};

export default Order;
