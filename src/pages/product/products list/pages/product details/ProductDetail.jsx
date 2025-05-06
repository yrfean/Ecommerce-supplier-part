import React from "react";
import Button from "../../../../../login and signup pages/components/ButtonNoIcon";

const ProductDetail = () => {
  return (
    <div className="p-3">
      <h1 className="text-xl font-semibold">Product Details</h1>

      {/* body */}
      <div className="w-full mt-3 h-[447px] rounded-lg px-8 py-3 bg-[#F4F4F4]">
        <div className="bg-white px-0 py-4 rounded-lg flex items-center justify-around">
          {/* image and pd details */}
          <div className="">
            {/* img */}
            <div className="mb-2">
              <img
                src="https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"
                className="h-[230px] w-[380px] object-cover rounded-lg"
              />
            </div>
            {/* details */}
            <div className="flex gap-5 w-full">
              <div className="space-y-2">
                <p>
                  Product ID: <span>87654323456</span>
                </p>
                <p className="mb-2">
                  Product Name: <span>Fair & Lovelyy</span>
                </p>
                <plaintext className="h-[80px] rounded-lg text-justify text-ellipsis text-wrap p-1 bg-[#F4F4F4] w-[230px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis
                </plaintext>
              </div>
              <div className="space-y-">
                <p className="font-bold mb-2">$141.0</p>
                <img
                  src="/barcode.png"
                  alt="barcode"
                  className="w-[130px] h-[30px] mb-2"
                />
                <div className="fle">
                  <div className="bg-[#354A5F] cursor-pointer text-center mb-1 text-white h-[34px] py-1 px-1 rounded-lg">
                    Oil/Vineagar
                  </div>
                  <div className="bg-[#47BA82] cursor-pointer text-center text-white h-[34px] py-1 px-1 rounded-lg">
                    Instock
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* line */}
          <div className="h-[320px] w-[1.4px] bg-gray-500 opacity-25" />
          {/* stock detsils */}
          <div className="w-[300px] p-2 ">
            <h1 className="font-semibold mb-2 text-lg">Current Stock</h1>
            <div className="bg-[#F5FFFA] p-2 space-y-4 rounded-lg">
              <div className="flex items-center gap-9 justify-between">
                <p>200 G or S</p>
                <div className="bg-white w-32 rounded-lg shadow-sm text-center py-1">
                  10
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>500 G or M</p>
                <div className="bg-white w-32 rounded-lg shadow-sm text-center py-1">
                  4
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>1 KG or L</p>
                <div className="bg-white w-32 rounded-lg shadow-sm text-center py-1">
                  10
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>2 KG or XL</p>
                <div className="bg-white w-32 rounded-lg shadow-sm text-center py-1">
                  10
                </div>
              </div>
              <div className="w-full mt-4 mb-1 p-2 flex justify-between px-4 pr-14 shadow-sm rounded-lg bg-white">
                <p>Total quantity</p>
                <p>40</p>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              <div className="bg-[#354A5F] px-3 cursor-pointer text-center mb-1 text-white h-[34px] py-1  rounded-lg">
                All Batches
              </div>
              <div className="bg-[#47BA82] cursor-pointer text-center text-white h-[34px] py-1 px-4 rounded-lg">
                Add Quantity/Stock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
