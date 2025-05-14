import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CalendarDays, ContactRound, Truck } from "lucide-react";

const boxShippingDetails = [
  { icon: ContactRound, title: "Supplier ID:", val: "9876547" },
  { icon: Truck, title: "Shipment ID:", val: "9876547" },
  { icon: CalendarDays, title: "Dispatch Date", val: "3 Oct 1999" },
];

const ShippingSchedule = () => {
  return (
    <div className="p-3">
      <h1 className="mt-1 mb-4 text-2xl font-bold">Shipping Schedule</h1>

      {/* boxes */}
      <div className="grid grid-cols-4 gap-6">
        {boxShippingDetails.map((box) => (
          <div className="bg-[#F8F8F8] text-center rounded-lg h-[80px] p-2 flex items-center justify-evenly gap-2">
            <box.icon className="size-9" />
            <div>
              <p className="">{box.title}</p>
              <p className="font-semibold">{box.val} </p>
            </div>
          </div>
        ))}
        <div className="bg-[#F8F8F8] text-center space-y-2 flex flex-col justify-center items-center rounded-lg h-[80px] p-2 gap-">
          <p className="text-[#47BA82]">Date of Shipping</p>
          <div className="outline outline-[#47BA82] rounded-md text-[#47BA82] flex justify-center items-center bg-white px-4 py-1">
            21 Oct a2024
          </div>
        </div>
      </div>
      {/* calender */}
      <div className="mt-2 bg-[#F8F8F8] w-full h-[425px] rounded-lg">
        
      </div>
    </div>
  );
};

export default ShippingSchedule;
