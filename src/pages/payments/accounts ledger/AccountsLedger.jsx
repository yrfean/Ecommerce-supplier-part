import { ArrowRightLeft } from "lucide-react";
import Searchbar from "./../../../components/Searchbar";
import { useState } from "react";
import NormalTable from "./../../../components/NormalTable";

const AccountsLedger = () => {
  const [page, setPage] = useState("today");

  return (
    <div className="w-full px-1">
      <h1 className="text-2xl font-semibold my-2">Accounts Ledger</h1>

      {/* navbar */}
      <div className="flex px-10 w-full justify-between items-center bg-[#F8F8F8] h-[60px] rounded-lg ">
        <div className="items-center flex justify-between">
          <div className="space-x-5">
            <button
              onClick={() => setPage("today")}
              className={`font-semibold w-[120px]  cursor-pointer transition-all duration-300 ${
                page === "today"
                  ? "bg-white py-2 rounded-lg shadow text-[#47BA82]"
                  : "text-gray-600"
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setPage("yesterday")}
              className={`font-semibold w-[120px] cursor-pointer transition-all duration-300 ${
                page === "yesterday"
                  ? "bg-white py-2 rounded-lg shadow text-[#47BA82]"
                  : "text-gray-600"
              }`}
            >
              Yesterday
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div className="p-1 bg-white rounded-lg ">
            <Searchbar placeholder={"Search transaction"} />
          </div>
          <ArrowRightLeft size={23} />
        </div>
      </div>

      {/* boxes */}
      <div className="w-full flex items-center gap-3 mt-2">
        <div className="h-20 outline-1 outline-[#47BA82BA] rounded-lg bg-[#F4FFFA] flex items-center justify-center gap-2 w-70">
          <p className="text-xl">Opening Balance</p>
          <p className="text-xl font-semibold">$1000.00</p>
        </div>
        <div className="h-20 outline-1 outline-[#47BA82BA] rounded-lg bg-[#F4FFFA] flex items-center justify-center gap-4 w-70">
          <p className="text-xl">Closing Balance</p>
          <p className="text-xl font-semibold">$1000.00</p>
        </div>
      </div>

      {/* transactio list */}
      <h1 className="mt-3 text-xl font-semibold">Transaction List</h1>
      <div className="h-[350px] overflow-auto custom-scrollbar">
        <NormalTable
          titles={[["SI NO"], ["Name"], ["Date/Time"], ["Amount"], ["Status"]]}
          values={[
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
            [["01"], ["Demo name"], ["12:00PM"], ["1200"], ["Debited"]],
          ]}
        />
      </div>
    </div>
  );
};

export default AccountsLedger;
