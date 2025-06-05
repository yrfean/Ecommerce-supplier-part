import { ArrowDownZA, Funnel, Search } from "lucide-react";
import FilterOrSorting from "../../../../../components/FilterOrSorting";
import { useEffect, useState } from "react";

const rawItems = [
  {
    SiNO: "01",
    orderId: "2345",
    productName: "Demo Name",
    Category: "Clothes",
  },
  {
    SiNO: "01",
    orderId: "2345",
    productName: "Demo Name",
    Category: "Clothes",
  },
  {
    SiNO: "01",
    orderId: "2345",
    productName: "Demo Name",
    Category: "Clothes",
  },
  {
    SiNO: "01",
    orderId: "2345",
    productName: "Demo Name",
    Category: "Clothes",
  },
  {
    SiNO: "01",
    orderId: "2345",
    productName: "Demo Name",
    Category: "Clothes",
  },
  {
    SiNO: "01",
    orderId: "2345",
    productName: "Demo Name",
    Category: "Clothes",
  },
];

const titles = ["Si NO", "Order ID", "Product Name", "Category"];

const NewOrderTable = () => {
  const arrayFormat = rawItems.map(
    ({ SiNO, orderId, productName, Category }) => [
      SiNO,
      orderId,
      productName,
      Category,
    ]
  );
  const items = arrayFormat;
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const [newItems, setNewItems] = useState();
  const itemsPerpage = 6;
  console.log(itemsPerpage);
  const totalPages = Math.ceil(items.length / itemsPerpage);

  useEffect(() => {
    setMaxPage(totalPages);
    const startIndex = (currentPage - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    const currentOrders = items.slice(startIndex, endIndex);
    setNewItems(currentOrders);
  }, [currentPage]);
  return (
    <div>
      {/* filtering / pagination */}
      <div className="bg-[#F8F8F8] w-full rounded-lg p-2 h-[60px] flex justify-between">
        {/* filter  and sorting*/}
        <div className="flex gap-3">
          {/* filter */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={Funnel}
              options={["Monday", "Someday"]}
              placeholder={"Filter"}
            />
          </div>
          {/* sorting */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={ArrowDownZA}
              options={["Monday", "Somedat"]}
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

      {/* table */}
      <div>
        <table className="w-full border-separate table-fixed border-spacing-y-[5.5px]">
          <thead className="sticky top-1 z-10">
            <tr className="bg-[#354A5F] text-white rounded-lg">
              {titles.map((t, index) => (
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
              ))}
            </tr>
          </thead>

          <tbody className="mt-2">
            {newItems?.map((row, index) => (
              <tr
                key={index}
                className="text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden"
              >
                {row?.map((cell, i) => (
                  <td key={i} className="px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewOrderTable;
