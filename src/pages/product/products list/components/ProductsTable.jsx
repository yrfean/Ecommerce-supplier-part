import React, { useEffect, useState } from "react";
import { useGetProducts } from "../../../../Query/Mutate";

const titles = [
  "SI no.",
  "Product ID",
  "Product name",
  "Category",
  "Discription",
  "Quantity",
  "Barcode",
];

const ProductsTable = ({
  currentPage,
  setCurrentPage,
  setMaxPage,
  searchValue,
}) => {
  const { data } = useGetProducts();
  const productsFromData = data?.data || [];

  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);

  const itemsPerPage = 6;

  // 🔍 Filter products on search or when data changes
  useEffect(() => {
    const filtered = productsFromData.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.id.toString().includes(searchValue)
      );
    });
    setProducts(filtered);
    setCurrentPage(1);
  }, [searchValue, productsFromData]);

  // 📦 Update total pages when filtered products change
  useEffect(() => {
    if (Array.isArray(products)) {
      const totalPages = Math.ceil(products.length / itemsPerPage);
      setMaxPage(totalPages);
    }
  }, [products]);

  // 📃 Slice current products when page or filtered list changes
  useEffect(() => {
    if (Array.isArray(products)) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const sliced = products.slice(startIndex, endIndex);
      setCurrentProducts(sliced);
    }
  }, [currentPage, products]);

  // 🐞 Debug
  useEffect(() => {
    if (products) console.log("products:", products);
  });

  return (
    <div className="p-2 h-[447px] overflow-y-hidden">
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
          {currentProducts?.map((p, index) => {
            const allQuantities = p.units.map((batch) => batch.quantity);
            const quantity = allQuantities.reduce((acc, curr) => acc + curr, 0);
            return (
              <tr
                onClick={() =>
                  (location.href = `/product/product-details/${p.id}`)
                }
                key={index}
                className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
              >
                <td className="px- py-2">{index + 1}</td>
                <td className="px-4 py-2">{p.unique_id}</td>
                <td className="px-4 py-2 max-h-30 overflow-hidden">
                  <div className="line-clamp-1">{p.title}</div>
                </td>
                <td className="px-4 py-2 text-sm">{p.category_name}</td>
                <td className="px-4 py-2 text-sm">
                  <div className="line-clamp-2">{p.description}</div>
                </td>
                <td className="px-4 py-2 ">{quantity}</td>

                <td className="px-4 py-2">
                  <img
                    src={`${import.meta.env.VITE_MEDIA_URL}/${p.barcode_image}`}
                    alt="Barcode"
                    className="h-8"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
