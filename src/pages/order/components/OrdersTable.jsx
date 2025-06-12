import { ArrowDownZA, Check, Funnel, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import FilterOrSorting from "../../../components/FilterOrSorting";

const filterOptions = ["Monday", "Someday"];

const OrdersTable = ({
  data,
  columns,
  trueOrFalse,
  getIdOfOrderForAccept,
  getIdOfOrderForReject,
}) => {
  return (
    <div className="mt-2 h-fit overflow-y-hidden">
      {/* filtering,sortin ,searhcing,pagin.... */}
      <div className="bg-[#F8F8F8] w-full rounded-lg p-2 h-[60px] flex justify-between">
        {/* filter  and sorting*/}
        <div className="flex gap-3">
          {/* filter */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={Funnel}
              options={filterOptions}
              placeholder={"Filter"}
            />
          </div>
          {/* sorting */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={ArrowDownZA}
              options={filterOptions}
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
          <div className="space-x-2">
            <button
              onClick={() => {}}
              className="h-full w-[105px] rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 bg-white px-2 text-gray-500 font-semibold "
            >
              {"<< Previous"}
            </button>
            <button className="h-full w-[50px] rounded-lg cursor-pointer bg-white px-2  font-semibold ">
              01
            </button>
            <button
              onClick={() => {}}
              className="h-full hover:bg-[#3DA372] transition-all duration-300 w-[105px] rounded-lg cursor-pointer bg-[#47BA82] px-2 text-white font-semibold "
            >
              {"Next >>"}
            </button>
          </div>
        </div>
      </div>

      <table className="w-full border-separate table-fixed border-spacing-y-[5.5px]">
        <thead className="sticky top-1 z-10">
          <tr className="bg-[#354A5F] text-white rounded-lg">
            <th className={`px-4 py-2 rounded-tl-lg`}>Si No</th>
            {Array.isArray(columns) &&
              columns.map((col, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 ${
                    index === columns.length - 1 && !trueOrFalse
                      ? "rounded-tr-lg"
                      : ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            {trueOrFalse ? (
              <th className="rounded-tr-lg overflow-hidden"></th>
            ) : null}
          </tr>
        </thead>

        <tbody className="mt-2">
          {data?.map((row, index) => (
            <tr
              key={index}
              className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
            >
              <td className="px-4 py-2 max-h-30 overflow-hidden">
                <div className="line-clamp-1">{index + 1}</div>
              </td>
              {columns.map((col, index) => {
                return (
                  <td
                    key={index}
                    className="px-1 py-2 max-h-30 overflow-hidden"
                  >
                    <div className="line-clamp-1 ">{row[col.acr]}</div>
                  </td>
                );
              })}

              {trueOrFalse ? (
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <div
                      onClick={() => getIdOfOrderForAccept(row.id)}
                      className="flex bg-[#47BA82] hover:bg-[#3DA372] text-white rounded-md px-3 py-1"
                    >
                      <Check className="size-4" />
                    </div>
                    <div
                      onClick={() => getIdOfOrderForReject(row.id)}
                      className="flex bg-[#354A5F] hover:opacity-90 text-white rounded-md px-3 py-1"
                    >
                      <X className="size-4" />
                    </div>
                  </div>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
