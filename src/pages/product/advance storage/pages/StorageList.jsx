import { useState } from "react";
import NewOrderTable from "./components/NewOrderTable";
import ShippedTable from "./components/ShippedTable";
import DeliveredTable from "./components/DeliveredTable";
import CancelledTable from "./components/CancelledTable";

const StorageList = () => {
  const [page, setPage] = useState("delivered");

  return (
    <div>
      <h1 className="text-2xl font-semibold mt-4 mb-7">Advance Storage</h1>

      {/* navbar boxes */}
      <div className="grid grid-cols-4 px-3 gap-4 mb-5">
        <div
          onClick={() => setPage("newOrder")}
          className={`cursor-pointer transition-all duration-100 h-20 flex items-center justify-center text-xl text-[#47BA82] bg-[#F3FFFA] font-semibold rounded-lg outline-0 ${
            page === "newOrder"
              ? "outline-2 outline-[#3BC288]"
              : "shadow-xs shadow-[#00000040]"
          }`}
        >
          New Order
        </div>
        <div
          onClick={() => setPage("shipped")}
          className={`cursor-pointer transition-all duration-100 h-20 text-xl flex items-center justify-center text-[#FFDE6A] bg-[#FFFFEE] font-semibold rounded-lg outline-0 ${
            page === "shipped"
              ? "outline-2 outline-[#FFDE6AFE]"
              : "shadow-xs shadow-[#00000040]"
          }`}
        >
          Shipped
        </div>
        <div
          onClick={() => setPage("delivered")}
          className={`cursor-pointer transition-all duration-100 h-20 text-xl flex items-center justify-center text-[#88A4FF] bg-[#EEF4FF] font-semibold  rounded-lg outline-0  ${
            page === "delivered"
              ? "outline-2 outline-[#88A4FF]"
              : "shadow-xs shadow-[#00000040]"
          }`}
        >
          Delivered
        </div>
        <div
          onClick={() => setPage("cancelled")}
          className={`cursor-pointer transition-all duration-100 h-20 flex text-xl items-center justify-center text-[#E79EBB] bg-[#FFF3F8] font-semibold  rounded-lg outline-0  ${
            page === "cancelled"
              ? "outline-2 outline-[#E79EBB]"
              : "shadow-xs shadow-[#00000040]"
          }`}
        >
          Cancelled
        </div>
      </div>
      <div>
        {page === "newOrder" ? (
          <NewOrderTable />
        ) : page === "shipped" ? (
          <ShippedTable />
        ) : page === "delivered" ? (
          <DeliveredTable />
        ) : (
          <CancelledTable />
        )}
      </div>
    </div>
  );
};

export default StorageList;
