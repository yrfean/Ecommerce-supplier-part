import React, { useState } from "react";
import History from "./pages/History";
import Schedule from "./pages/schedule/Schedule";
import Active from "./pages/Active";

import Searchbar from "../../components/Searchbar";

const Offers = () => {
  const [page, setPage] = useState("active");

  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl mb-4">Offers</h1>

      {/*navbar */}
      <div className="w-full h-[70px] bg-[#F8F8F8] pr-10 rounded-lg flex justify-between items-center">
        <div className="w-2/3 flex items-center ml-6 gap-3 font-semibold">
          <div
            onClick={() => setPage("active")}
            className={`cursor-pointer w-[130px] h-[40px] transition-all duration-300 flex justify-center items-center ${
              page === "active"
                ? "bg-white  shadow text-center rounded-lg "
                : ""
            }`}
          >
            Active
          </div>
          <div
            onClick={() => setPage("schedule")}
            className={`cursor-pointer w-[130px] h-[40px] flex justify-center items-center transition-all duration-300 ${
              page === "schedule"
                ? "bg-white  shadow text-center rounded-lg "
                : ""
            }`}
          >
            Schedule
          </div>
          <div
            onClick={() => setPage("history")}
            className={`cursor-pointer w-[130px] h-[40px] flex justify-center items-center ${
              page === "history"
                ? "bg-white transition-all duration-300  shadow text-center rounded-lg "
                : ""
            }`}
          >
            History
          </div>
        </div>
        <div className="p-1 bg-white rounded-lg shadow-xs w-[290px]">
          <Searchbar placeholder={"Search transaction"} />
        </div>
      </div>

      {/* body */}
      <div>
        {page === "active" ? (
          <div className="mt-1">
            <Active />
          </div>
        ) : page === "history" ? (
          <div>
            <History />
          </div>
        ) : (
          <div className="mt-2">
            <Schedule />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;
