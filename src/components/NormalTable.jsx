const NormalTable = ({ titles, values }) => {
  return (
    <div className="w-full h-full">
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
          {values?.map((each, index) => (
            <tr
              key={index}
              className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
            >
              {each?.map((e,index) => {
                return <td key={index} className="px- py-2">{e}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NormalTable;
