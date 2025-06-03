import { ArrowDownZA, Edit, Funnel, Search } from "lucide-react";
import FilterOrSorting from "../../components/FilterOrSorting";

const titles = [
  "Code Type",
  "Suffix",
  "Net Value",
  "Postfix/prefix",
  "Full ID",
];

const user_details = [
  {
    codeType: "User",
    suffix: "SUPPLIER#",
    netValue: "102",
    postfixOrPrefix: "Postfix",
    fullId: "10SUPPLIER",
  },
  {
    codeType: "User",
    suffix: "SUPPLIER#",
    netValue: "102",
    postfixOrPrefix: "Postfix",
    fullId: "10SUPPLIER",
  },
  {
    codeType: "User",
    suffix: "SUPPLIER#",
    netValue: "102",
    postfixOrPrefix: "Postfix",
    fullId: "10SUPPLIER",
  },
  {
    codeType: "User",
    suffix: "SUPPLIER#",
    netValue: "102",
    postfixOrPrefix: "Postfix",
    fullId: "10SUPPLIER",
  },
];

const Configuration = () => {
  return (
    <div className="p-3 pt-5">
      <div className="bg-[#F8F8F8] w-full rounded-lg p-2 h-[60px] flex justify-between mb-1">
        {/* filter  and sorting*/}
        <div className="flex gap-3">
          {/* filter */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={Funnel}
              options={[["Monday"], ["Sunday"]]}
              placeholder={"Filter"}
            />
          </div>
          {/* sorting */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={ArrowDownZA}
              options={[["Monday"], ["Sunday"]]}
              placeholder={"Sorting"}
            />
          </div>
        </div>

        {/* search */}
        <div className="relative">
          <input
            type="text"
            name=""
            placeholder="Search here..."
            className="bg-white rounded-lg h-[45px] font-semibold px-3 pl-8 outline-none"
          />
          <Search className="absolute w-5 h-5 text-gray-500 top-[12px] left-[8px]" />
        </div>
      </div>

      <div className="h-[230px] overflow-auto custom-overflow custom-scrollbar">
        <table className="w-full border-separate table-fixed border-spacing-y-[5.5px]">
          <thead className="sticky top-1 z-10">
            <tr className="bg-[#354A5F] text-white rounded-lg">
              {titles.map((t, index) => (
                <>
                  <th
                    key={index}
                    className={`px-4 py-2 ${
                      index === 0
                        ? "rounded-tl-lg"
                        : index === titles.length - 1
                        ? "rounded-tr-lg"
                        : ""
                    }`}
                  >
                    {t}
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody className="mt-4">
            {user_details?.map((user, index) => (
              <tr
                key={index}
                className={`text-black text-center  bg-[#F8F8F8] rounded-lg overflow-hidden`}
              >
                <td className="px-4 py-2 max-h-30 overflow-hidden">
                  <div className="line-clamp-1">{user.codeType}</div>
                </td>
                <td className="px-4 py-4 text-sm">{user.suffix}</td>
                <td className="px-4 py-2 text-sm">{user.netValue}</td>
                <td className="px-4 py-2 text-sm">{user.postfixOrPrefix}</td>

                <td className="px-4 py-2  flex items-center gap-4 justify-center">
                  <div className="text-sm pt-2">{user.fullId}</div>
                  <Edit
                    size={15}
                    className="text-[#47BA82] mt-2 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* id config */}
      
    </div>
  );
};

export default Configuration;
