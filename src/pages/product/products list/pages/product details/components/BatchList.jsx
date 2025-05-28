import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const BatchList = ({
  setCurrentPage,
  searchValue,
  currentPage,
  isCurrentPage,
  setMaxPage,
  batchesDetail,
}) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [batches, setBatches] = useState();
  const [filteredBatches, setFilteredbatches] = useState();
  const batchPerPage = 5;

  useEffect(() => {
    
    const filtered = batchesDetail?.filter((batch) =>
      batch?.batch_number
        ?.toString()
        .toLowerCase()
        .includes(searchValue?.toLowerCase())
    );
    setFilteredbatches(filtered);
    console.log(filtered);
    setCurrentPage(1);
  }, [batchesDetail, searchValue]);

  useEffect(() => {
    if (filteredBatches) {
      const maxPages = Math.ceil(filteredBatches?.length / batchPerPage);
      setMaxPage(maxPages);
    }
  }, [filteredBatches]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * batchPerPage;
    const endIndex = startIndex + batchPerPage;

    const batches = filteredBatches?.slice(startIndex, endIndex);
    setBatches(batches);
  }, [currentPage, filteredBatches]);

  return (
    <div className="h-[370px] overflow-auto custom-scrollbar">
      {batches?.map((batch, index) => (
        <div
          key={index}
          className={`min-h-[45px] mb-2 w-full p-2 rounded-lg text-sm  ${
            isCurrentPage ? "bg-[#F4FFFA]" : "bg-[#F8F8F8]"
          }`}
        >
          <div className="w-full h-[45px] flex items-center justify-around ">
            <p>
              Batch No: <span>{batch.batch_number}</span>
            </p>
            <p>
              Batch Created Date:{" "}
              <span>{new Date(batch.created_at).toLocaleDateString()}</span>
            </p>
            <p>
              Expiry Date: <span>{batch.expiry_date}</span>
            </p>
            <p>
              Manufacturer Date: <span>{batch.manufacturing_date}</span>
            </p>
            <div
              onClick={() => {
                if (showQuantity === index) {
                  setShowQuantity(false);
                } else {
                  setShowQuantity(index);
                }
              }}
              className="flex gap-2 cursor-pointer"
            >
              <p>Quantity</p>
              <ArrowDown
                className={`transition-all duration-300 ${
                  showQuantity === index ? "rotate-180" : ""
                }`}
                strokeWidth={0.5}
              />
            </div>
          </div>
          {showQuantity === index ? (
            <div
              key={index + 1}
              className=" bg-white mx-14 px-3 py-2 rounded-lg shadow-xs"
            >
              <div className="flex items-center justify-around w-full overflow-x-hidden">
                <p>
                  Total quantity: <span>{batch.quantity}</span>
                </p>
                {batch.stock_details.map((stock) => (
                  <p>
                    <span>
                      {stock.unit_quantity} {stock.unit_name}{" "}
                    </span>
                    : <span>{stock.packets}</span>
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default BatchList;
