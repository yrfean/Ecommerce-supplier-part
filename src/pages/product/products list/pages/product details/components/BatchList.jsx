import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const batchesDetail = [
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
  {
    batchNo: 90294,
    batchCreatedDate: new Date(2004, 1, 2),
    expiryDate: new Date(2008, 3, 2),
    manufactureDate: new Date(3004, 5, 1),
    quantity: [
      {
        totalQuantity: 20,
        twohundredGOrS: 10,
        fivehundredGOrM: 10,
        oneKgOrL: 12,
      },
    ],
  },
];

const BatchList = ({ currentPage, isCurrentPage, setMaxPage }) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [batches, setBatches] = useState();

  const batchPerPage = 5;
  const maxPages = Math.ceil(batchesDetail.length / batchPerPage);
  setMaxPage(maxPages);

  useEffect(() => {
    const startIndex = (currentPage - 1) * batchPerPage;
    const endIndex = startIndex + batchPerPage;

    const batches = batchesDetail.slice(startIndex, endIndex);
    setBatches(batches);
  }, [currentPage]);

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
              Batch No: <span>{batch.batchNo}</span>
            </p>
            <p>
              Batch Created Date:{" "}
              <span>{batch.batchCreatedDate.toLocaleDateString()}</span>
            </p>
            <p>
              Expiry Date: <span>{batch.expiryDate.toLocaleDateString()}</span>
            </p>
            <p>
              Manufacturer Date:{" "}
              <span>{batch.manufactureDate.toLocaleDateString()}</span>
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
              <div className="flex items-center justify-around">
                <p>
                  Total quantity: <span>{batch.quantity[0].totalQuantity}</span>
                </p>
                <p>
                  200 G or S: <span>{batch.quantity[0].twohundredGOrS}</span>
                </p>
                <p>
                  500 G or M: <span>{batch.quantity[0].fivehundredGOrM}</span>
                </p>
                <p>
                  1 KG or L: <span>{batch.quantity[0].oneKgOrL}</span>
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default BatchList;
