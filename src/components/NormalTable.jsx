const NormalTable = ({ columns, values, setValue }) => {
  return (
    <div className="w-full h-full">
      <table className="w-full border-separate table-fixed border-spacing-y-[5.5px]">
        <thead className="sticky top-1 z-10">
          <tr className="bg-[#354A5F] text-white rounded-lg">
            <th className={`px-4 py-2  rounded-tl-lg`}>Si NO</th>
            {columns.map((col, index) => (
              <th
                key={index}
                className={`px-4 py-2 ${
                  index === columns.length - 1 ? "rounded-tr-lg" : ""
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="mt-2">
          {values?.map((row, index) => (
            <tr
              onClick={() => setValue(row)}
              key={index}
              className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
            >
              <td className=" py-2 max-h-30 overflow-hidden">
                <div className="line-clamp-1">{index + 1}</div>
              </td>
              {columns.map((col) => (
                <td className=" py-2 max-h-30 overflow-hidden">
                  <div className="line-clamp-1">{row[col.acr]} </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NormalTable;
