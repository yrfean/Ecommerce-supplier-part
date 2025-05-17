const boxDetail = [
  { title: "Total payment", no: "25" },
  { title: "Pending", no: "20" },
  { title: "Completed", no: "1155.03" },
];
const Payments = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold">Payments</h1>

      {/* top boxes  */}
      <div className="bg-[#F6FBF8] flex items-center rounded-lg justify-evenly w-full h-[100px]">
        {boxDetail.map((detail) => (
          <div className="rounded-lg w-[180px] h-[70px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-1">
            <p className="font-semibold text-xl">{detail.title} </p>
            <p className="text-[#3BC288] text-xl truncate font-semibold">
              {detail.no}{" "}
            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Payments;
