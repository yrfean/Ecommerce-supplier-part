const titles = [
  "Product ID",
  "Product name",
  "Category",
  "Batch No.",
  "Quantity",
  "Expiry Date",
  "Validity",
];

const products = [
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
  [
    ["67876"],
    ["Demo name"],
    ["Oil/vineagar"],
    ["2343"],
    ["5"],
    ["28/1/24"],
    ["1 Week"],
  ],
];

const ExpiryList = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mt-2 mb-3">Expiry List</h1>

      {/* box */}
      <div className="bg-[#F6FBF8] outline outline-gray-300 flex justify-center items-center gap-5 w-120 h-20 rounded-lg">
        <p className="text-lg font-semibold">
          Number of products to expire sooon!
        </p>
        <p className="bg-white rounded-lg flex justify-center items-center w-12 h-9 text-[#47BA82] text-2xl font-semibold">
          6
        </p>
      </div>

      {/* products */}
      <h1 className="text-xl font-semibold mt-4 mb-1">Products</h1>
      {/* table */}
      <div className="h-[385px] overflow-auto custom-scrollbar">
        <table className="w-full border-separate table-fixed border-spacing-y-[5.5px]">
          <thead className="sticky top-1 z-10">
            <tr className="bg-[#354A5F] text-white rounded-lg">
              {titles.map((t, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 ${
                    index === 0
                      ? "rounded-tl-lg"
                      : index === titles.length
                      ? "rounded-tr-lg"
                      : ""
                  }`}
                >
                  {t}
                </th>
              ))}

              <th className="rounded-tr-lg overflow-hidden"></th>
            </tr>
          </thead>

          <tbody className="mt-2">
            {products?.map((each, index) => (
              <tr
                key={index}
                className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
              >
                {each.map((eachOfeach) => (
                  <>
                    <td className="px-4 py-2 max-h-30 overflow-hidden">
                      <div className="line-clamp-1">{eachOfeach}</div>
                    </td>
                  </>
                ))}
                <td>
                  <div className="flex text-white items-center justify-center px-4 py-1 bg-[#47BA82] rounded-lg">
                    Get details
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpiryList;
