import { useEffect } from "react";
import DatePickerCalendar from "./DatePickerCalendar";
import ShippingScheduleBoxDetials from "./ShippingScheduleBoxDetials";
import { useGetAllBatches, useGetProductIds } from "../../../Query/Mutate";
import axios from "axios";
import { Plus } from "lucide-react";

const ShippingSchedule = () => {
  return (
    <div className="p-3">
      {/* boxes */}
      <div className="w-full">
        <ShippingScheduleBoxDetials />
      </div>

      {/* calendar */}
      <div className="w-full h-[400px]">
        <DatePickerCalendar />
      </div>

      {/* btn */}
      <div className="w-full h-[59px] flex items-end justify-center">
        <div className="bg-[#47BA82] hover:bg-[#3DA372] transition-all duration-300 gap-2 cursor-pointer h-[40px] w-[25%] rounded-lg flex items-center justify-center text-white font-semibold">
          <Plus className="" size={20} />
          <p className="ml-">Schedule on this date</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingSchedule;
