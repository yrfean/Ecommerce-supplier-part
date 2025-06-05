const PaymentDetails = ({ details }) => {
  return (
    <div className="w-full h-full bg-[#F6FBF8] rounded-lg p-4 ">
      <div className="w-ful mt-7 h-fi grid grid-cols-2 grid-rows-3 gap-5 pl-10 space-x-20">
        {Object.entries(details).map(([key, value]) => {
          const [partOne, partTwo] = key.split("_");
          if (key === "Amount_Paid") {
            return (
              <div className="flex gap-10">
                <p className="text-[#47BA82] font-semibold text-lg">Paid</p>
                <div>
                  <p className="text-gray-500 font-medium text-sm">
                    Amount Paid
                  </p>
                  <div className="w-40 h-7 rounded text-lg flex items-center justify-center font-medium text-[#47BA82] bg-white">
                    {value}{" "}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <p className="font-medium text-lg ">
              {partOne + " " + (partTwo ? partTwo : "")} :{" "}
              <span className="">{value} </span>{" "}
            </p>
          );
        })}
      </div>
      <div className="w-full flex justify-end mt-5">
        <div className="w-50 h-10 rounded-lg  cursor-pointer hover:bg-[#354A5F]/90 transition-all duration-300 bg-[#354A5F] text-white flex items-center justify-center">
          Get Reciept
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
