import { useState } from "react";
import NormalTable from "./../../components/NormalTable";
import { ArrowDownZA, Funnel, Search } from "lucide-react";
import FilterOrSorting from "../../components/FilterOrSorting";
import PaymentDetails from "./Components/PaymentDetails";

const paymentDetail = {
  Invoice_Numbers: 7584,
  From: "Admin",
  Payment_Date: "02/01/0000",
  Payment_ID: 23434,
  Payment_Method: "Bank Transfer",
  Amount_Paid: "$500",
};

const boxDetail = [
  { title: "Total payment", no: "25" },
  { title: "Pending", no: "20" },
  { title: "Completed", no: "1155.03" },
];
const Payments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const [payment, setPayment] = useState(null);
  // const [paginatedValues, setPaginatedValues] = useState(values);
  // const itemsPerpage = 5;
  // const totalPages = Math.ceil(ordersDetails.length / itemsPerpage);

  // useEffect(() => {
  //   setMaxPage(totalPages);
  //   const startIndex = (currentPage - 1) * itemsPerpage;
  //   const endIndex = startIndex + itemsPerpage;
  //   const currentOrders = ordersDetails.slice(startIndex, endIndex);/
  //   setPaginatedValues(currentOrders);
  // }, [currentPage]);

  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold">Payments</h1>

      {/* top boxes  */}
      <div className="bg-[#F6FBF8] flex items-center rounded-lg justify-evenly w-full h-[100px]">
        {boxDetail.map((detail) => (
          <div className="rounded-lg w-[180px] shadow h-[70px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-1">
            <p className="font-semibold text-xl">{detail.title} </p>
            <p className="text-[#3BC288] text-xl truncate font-semibold">
              {detail.no}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination and filter */}
      <div className="bg-[#F8F8F8] w-full rounded-lg p-2 h-[60px] flex justify-between mt-5 mb-4">
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
      {payment ? (
        <div className="w-full h-[300px] ">
          <PaymentDetails details={paymentDetail} />
        </div>
      ) : (
        <NormalTable
          titles={[["Invoice Number"], ["Payment ID"], ["Payment Date"]]}
          values={[
            [["0201"], ["1034"], ["02/34/2023"]],
            [["0201"], ["1034"], ["02/34/2023"]],
          ]}
          setValue={setPayment}
        />
      )}
    </div>
  );
};

export default Payments;
