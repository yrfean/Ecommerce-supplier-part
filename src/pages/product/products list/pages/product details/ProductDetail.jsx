import { useEffect } from "react";
import { useGetProduct } from "../../../../../Query/products services/ProductsApi";

const ProductDetail = () => {
  const [, , , id] = location.pathname.split("/");
  const { data } = useGetProduct(id);
  const product_detail = data?.data;
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
              {product_detail ? (
                <img
                  src={`${import.meta.env.VITE_MEDIA_URL}${
                    product_detail?.image1
                  }`}
                  className="h-[230px] w-[380px] object-cover rounded-lg"
                />
              ) : (
                <div className="h-[230px] w-[380px] object-cover rounded-lg">
                  Image Loading...
                </div>
              )}
            </div>
            {/* details */}
            <div className="flex gap-5 w-full">
              <div className="space-y-2">
                <p>
                  Product ID: <span>{product_detail?.id}</span>
                </p>
                <p className="mb-2">
                  Product Name: <span>{product_detail?.title}</span>
                </p>
                <plaintext className="h-[80px] rounded-lg text-justify text-ellipsis text-wrap p-1 bg-[#F4F4F4] w-[230px]">
                  {product_detail?.description}
                </plaintext>
              </div>
              <div className="space-y-">
                <img
                  src={`${import.meta.env.VITE_MEDIA_URL}/${
                    product_detail?.barcode_image
                  }`}
                  alt="barcode"
                  className="w-[130px] h-[65px]"
                />
                <div className="fle">
                  <div className="bg-[#354A5F]  text-center mb-1 text-white h-[34px] py-1 px-1 rounded-lg">
                    {product_detail?.category_name}
                  </div>
                  <div className="bg-[#47BA82] text-center text-white h-[34px] py-1 px-1 rounded-lg">
                    Instock
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* line */}
          <div className="h-[320px] w-[1.4px] bg-gray-500 opacity-25" />
          {/* stock detsils */}
          <div className="w-[350px] p-2 ">
            <h1 className="font-semibold mb-2 text-lg">Current Stock</h1>
            <div className="bg-[#F5FFFA] p-2 space-y-4 rounded-lg">
              {product_detail?.units[0].stock_details.map((p) => (
                <div className="flex items-center gap-9 justify-between">
                  <p className="text-nowrap">
                    {p.unit_quantity} {p.unit_name}
                  </p>
                  <div className="bg-white w-32 rounded-lg shadow-sm text-center py-1">
                    {p.packets}
                  </div>
                  <div className="bg-white w-32 rounded-lg shadow-sm text-center py-1">
                    ₹{p.selling_price}
                  </div>
                </div>
              ))}

              <div className="w-full mt-4 mb-1 p-2 flex justify-between px-4 pr-14 shadow-sm rounded-lg bg-white">
                <p>Total Quantity</p>
                <p>{product_detail?.units[0].quantity} </p>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div
                onClick={() =>
                  (location.href = `/product/product-details/add-batch/${id}`)
                }
                className="bg-[#47BA82] hover:bg-[#47BA82]/80 transition-all duration-300 cursor-pointer text-center text-white h-[35px] py-1 px-4 rounded-lg"
              >
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
