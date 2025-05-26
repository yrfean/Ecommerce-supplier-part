import { useState } from "react";
import Schedule from "./pages/Schedule";
import Approved from "./pages/Approved";

const AdvertisingWindows = () => {
  const [page, setPage] = useState("schedule");

  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold my-2">Advertising Windows</h1>
      {/* navbar */}

      <div className="bg-[#F8F8F8] px-4 mt-3 w-full rounded-lg p-2 h-[60px] items-center flex justify-between">
        <div className="space-x-5">
          <button
            onClick={() => setPage("schedule")}
            className={`font-semibold w-[150px]  cursor-pointer transition-all duration-300 ${
              page === "schedule"
                ? "bg-white py-2 rounded-lg shadow text-[#47BA82]"
                : "text-gray-600"
            }`}
          >
            Schedule
          </button>
          <button
            onClick={() => setPage("approved")}
            className={`font-semibold w-[150px] cursor-pointer transition-all duration-300 ${
              page === "approved"
                ? "bg-white py-2 rounded-lg shadow text-[#47BA82]"
                : "text-gray-600"
            }`}
          >
            Approved
          </button>
        </div>
      </div>

      {page === "schedule" ? <Schedule /> : <Approved />}
    </div>
  );
};

export default AdvertisingWindows;
