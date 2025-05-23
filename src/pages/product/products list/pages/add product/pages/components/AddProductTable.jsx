import { Edit, X } from "lucide-react";

const AddProductTable = ({
  titles,
  values,
  setStockDetails,
  setEditThisStockDetails,
  stockDetails,
}) => {
  return (
    <div>
      <table className="w-full border-separate table-fixed border-spacing-y-[5.5px]">
        <thead className="sticky top-1 z-10">
          <tr className="bg-[#354A5F] text-white rounded-lg">
            {titles.map((t, index) => (
              <th
                key={index}
                className={`px-4 py-2 ${index === 0 ? "rounded-tl-lg" : ""}`}
              >
                {t}
              </th>
            ))}
            <th className="rounded-tr-lg"></th>
          </tr>
        </thead>

        <tbody className="mt-2">
          {values?.map((o, index) => (
            <tr
              key={index}
              className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
            >
              <td className="px-4 py-2">{o?.unit_quantity}</td>
              <td className="px-4 py-2 max-h-30 overflow-hidden">
                <div className="line-clamp-1">{o?.unit}</div>
              </td>
              <td className="px-4 py-2 text-sm">{o?.selling_price}</td>
              <td className="px-4 py-2 text-sm">{o?.mrp}</td>
              <td className="px-4 py-2">{o?.packets}</td>

              <td>
                <div className="flex items-center justify-center gap-3">
                  <div
                    onClick={() => {
                      setEditThisStockDetails(() =>
                        stockDetails.find((_, i) => index === i)
                      );
                      setStockDetails((prev) =>
                        prev.filter((_, i) => i !== index)
                      );
                    }}
                    className="flex bg-[#47BA82] hover:bg-[#3DA372] text-white rounded-md px-3 py-1"
                  >
                    <Edit className="size-4" />
                  </div>
                  <div
                    onClick={() =>
                      setStockDetails((prev) =>
                        prev.filter((_, i) => i !== index)
                      )
                    }
                    className="flex bg-[#354A5F] hover:opacity-90 text-white rounded-md px-3 py-1"
                  >
                    <X className="size-4" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddProductTable;
