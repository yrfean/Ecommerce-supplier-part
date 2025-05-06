import { ArrowDownZA, Funnel, Search } from "lucide-react";
import React, { useState } from "react";
import BatchList from "./components/BatchList";
import FilterOrSorting from "../../../../../components/FilterOrSorting";

const filterOptions = ["someday"];

const BatchHistory = () => {
  const [value, setValue] = useState("");
  const [maxPage, setMaxPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="bg-[#F8F8F8] mt-3 w-full rounded-lg p-2 h-[60px] flex items-center justify-between">
        {/* filter  and sorting*/}
        <div className="flex gap-3">
          {/* filter */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={Funnel}
              options={filterOptions}
              placeholder={"Filter"}
              setValue={setValue}
            />
          </div>
          {/* sorting */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={ArrowDownZA}
              options={filterOptions}
              setValue={setValue}
              placeholder={"Sorting"}
            />
          </div>
        </div>
        {/* seaching,pagin */}
        <div className="flex gap-3">
          {/* search */}
          <div className="relative">
            <input
              type="text"
              name=""
              placeholder="Search product here..."
              className="bg-white rounded-lg h-[45px] font-semibold px-3 pl-8 outline-none"
            />
            <Search className="absolute w-5 h-5 text-gray-500 top-[12px] left-[8px]" />
          </div>
          {/* pagination buttons */}
          <div className="space-x-2 ">
            <button
              onClick={() => {
                if (currentPage >= 2) {
                  setCurrentPage((i) => i - 1);
                }
              }}
              className="h-full w-[105px] rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 bg-white px-2 text-gray-500 font-semibold "
            >
              {"<< Previous"}
            </button>
            <button className="h-full w-[50px] rounded-lg cursor-pointer bg-white px-2  font-semibold ">
              {currentPage?.toString().padStart(2, "0")}
            </button>
            <button
              onClick={() => {
                if (currentPage < maxPage) setCurrentPage((i) => i + 1);
              }}
              className="h-full hover:bg-[#3DA372] transition-all duration-300 w-[105px] rounded-lg cursor-pointer bg-[#47BA82] px-2 text-white font-semibold "
            >
              {"Next >>"}
            </button>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h1 className="text-xl font-semibold">Batch History</h1>

        <div className="mt-4">
          <BatchList
            maxPage={maxPage}
            currentPage={currentPage}
            isCurrentPage={false}
            setMaxPage={setMaxPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BatchHistory;
