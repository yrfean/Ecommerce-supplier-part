import React, { useEffect, useState } from "react";
import ButtonWithIcon from "../../../../../components/ButtonWithIcon";
import ProductDetail from "./ProductDetail";
import CurrentBatches from "./CurrentBatches";
import BatchHistory from "./BatchHistory";
import { Plus } from "lucide-react";
import { useGetProduct } from "./../../../../../Query/Mutate";

const ProductDetails = () => {
  const [, , , id] = location.pathname.split("/");
  const { data: productDetails } = useGetProduct(id);
  const [page, setPage] = useState("productDetail");

  useEffect(() => {
    if (productDetails) console.log(productDetails);
  }, [productDetails]);
  return (
    <div className="">
      {/* NAVBAR */}
      <div className="bg-[#F8F8F8] px-4 mt-5 w-full rounded-lg p-2 h-[60px] items-center flex justify-between">
        <div className="space-x-8">
          <button
            onClick={() => setPage("productDetail")}
            className={`font-semibold  cursor-pointer transition-all duration-300 ${
              page === "productDetail"
                ? "bg-white px-3 py-2 rounded-lg shadow text-[#47BA82]"
                : "text-gray-600"
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setPage("currentBatch")}
            className={`font-semibold cursor-pointer transition-all duration-300 ${
              page === "currentBatch"
                ? "bg-white px-3 py-2 rounded-lg shadow text-[#47BA82]"
                : "text-gray-600"
            }`}
          >
            Current batches
          </button>
          <button
            onClick={() => setPage("batchHistory")}
            className={`font-semibold cursor-pointer transition-all duration-300 ${
              page === "batchHistory"
                ? "bg-white px-3 py-2 rounded-lg shadow text-[#47BA82]"
                : "text-gray-600"
            }`}
          >
            Batch history
          </button>
        </div>
        <div
          onClick={() => (location.href = "/product/product-details/add-batch")}
          className="h-[37px]"
        >
          <ButtonWithIcon icon={Plus} label={"Add batch"} />
        </div>
      </div>

      {/* pages */}
      <div>
        {page === "productDetail" ? (
          <div>
            <ProductDetail />
          </div>
        ) : page === "currentBatch" ? (
          <div>
            <CurrentBatches />
          </div>
        ) : (
          <div>
            <BatchHistory />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
