import React, { useEffect, useState } from "react";

const titles = [
  "SI no.",
  "Product ID",
  "Product name",
  "Category",
  "Discription",
  "Quantity",
  "Expiry date",
  "Barcode",
];

const products = [
  {
    siNo: 1,
    productId: "P001",
    productName: "Product A",
    category: "Category 1",
    description:
      "Description of Product A 'krngf gfporjg gporkgg roepgrelk g erkgerk gerjigherw geriogewg goierg gjerg giorg gjrg gnfrf r fref wef ew f e f",
    quantity: 10,
    expiryDate: "2023-12-31",
    barcode: "/barcode.png",
  },
  {
    siNo: 2,
    productId: "P002",
    productName: "Product B",
    category: "Category 2",
    description: "Description of Product B",
    quantity: 20,
    expiryDate: "2024-01-15",
    barcode: "/barcode.png",
  },
  {
    siNo: 3,
    productId: "P003",
    productName: "Product Cdslkfenrlkmg;'ml",
    category: "Category 3",
    description: "Description of Product C",
    quantity: 15,
    expiryDate: "2023-11-20",
    barcode: "/barcode.png",
  },
  {
    siNo: 4,
    productId: "P004",
    productName: "Product D",
    category: "Category 4",
    description: "Description of Product D",
    quantity: 25,
    expiryDate: "2024-02-10",
    barcode: "/barcode.png",
  },
  {
    siNo: 5,
    productId: "P005",
    productName: "Product E",
    category: "Category 5",
    description: "Description of Product E",
    quantity: 30,
    expiryDate: "2024-03-05",
    barcode: "/barcode.png",
  },
  {
    siNo: 6,
    productId: "P006",
    productName: "Product F",
    category: "Category 6",
    description: "Description of Product F",
    quantity: 12,
    expiryDate: "2023-12-15",
    barcode: "/barcode.png",
  },
  {
    siNo: 7,
    productId: "P007",
    productName: "Product G",
    category: "Category 7",
    description: "Description of Product G",
    quantity: 18,
    expiryDate: "2024-01-25",
    barcode: "/barcode.png",
  },
  {
    siNo: 8,
    productId: "P008",
    productName: "Product H",
    category: "Category 8",
    description: "Description of Product H",
    quantity: 22,
    expiryDate: "2024-04-10",
    barcode: "/barcode.png",
  },
  {
    siNo: 9,
    productId: "P009",
    productName: "Product I",
    category: "Category 9",
    description: "Description of Product I",
    quantity: 16,
    expiryDate: "2023-11-30",
    barcode: "/barcode.png",
  },
  {
    siNo: 10,
    productId: "P010",
    productName: "Product Jewflknwrlk nvrlkwem wk",
    category: "Category 10",
    description: "Description of Product J",
    quantity: 28,
    expiryDate: "2024-05-20",
    barcode: "/barcode.png",
  },
  {
    siNo: 11,
    productId: "P011",
    productName: "Product K",
    category: "Category 11",
    description: "Description of Product K",
    quantity: 35,
    expiryDate: "2024-06-15",
    barcode: "/barcode.png",
  },
  {
    siNo: 12,
    productId: "P012",
    productName: "Product L",
    category: "Category 12",
    description: "Description of Product L",
    quantity: 40,
    expiryDate: "2024-07-10",
    barcode: "/barcode.png",
  },
  {
    siNo: 13,
    productId: "P013",
    productName: "Product M",
    category: "Category 13",
    description: "Description of Product M",
    quantity: 50,
    expiryDate: "2024-08-05",
    barcode: "/barcode.png",
  },
];

const ProductsTable = ({ currentPage, setCurrentPage, setMaxPage }) => {
  const [currentProducts, setCurrentProducts] = useState();
  const itemsPerpage = 6;

  const totalPages = Math.ceil(products.length / itemsPerpage);

  setMaxPage(totalPages);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    const currentProducts = products.slice(startIndex, endIndex);
    setCurrentProducts(currentProducts);
  }, [currentPage]);

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
          {currentProducts?.map((p, index) => (
            <tr
              key={index}
              className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
            >
              <td className="px- py-2">{p.siNo}</td>
              <td className="px-4 py-2">{p.productId}</td>
              <td className="px-4 py-2 max-h-30 overflow-hidden">
                <div className="line-clamp-1">{p.productName}</div>
              </td>
              <td className="px-4 py-2 text-sm">{p.category}</td>
              <td className="px-4 py-2 text-sm">
                <div className="line-clamp-2">{p.description}</div>
              </td>
              <td className="px-4 py-2 ">{p.quantity}</td>
              <td className="px-4 py-2 text-sm">{p.expiryDate}</td>
              <td className="px-4 py-2">
                <img src={p.barcode} alt="Barcode" className="h-8" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
