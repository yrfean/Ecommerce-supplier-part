import { Icon } from "@iconify/react/dist/iconify.js";

const Boxes = () => {
  return (
    <div className="flex justify-around">
      {/* today sales */}
      <div className="flex items-center justify-center px-5 gap-5 rounded-lg w-[210px] shadow h-[90px] bg-[#F4FFFA]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#3BC288]"
          />
        </div>
        <div>
          <h1 className="text-[#3BC288] text-xl font-semibold">121</h1>
          <p>Today sales</p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-center px-5 gap-5 rounded-xl w-[210px] shadow h-[90px] bg-[#6DBBF20F]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#6DBAF2]"
          />
        </div>
        <div>
          <h1 className="text-[#6DBAF2] text-xl font-semibold">15</h1>
          <p>Today order</p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-center px-5 gap-5 rounded-xl w-[210px] shadow h-[90px] bg-[#FFB5B51F]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#FFB4B4]"
          />
        </div>
        <div>
          <h1 className="text-[#FFB4B4] text-xl font-semibold">121</h1>
          <p>In stock</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 gap-5 rounded-xl w-[210px] shadow h-[90px] bg-[#E6D3FF24]">
        <div className="">
          <Icon
            icon={"solar:sale-broken"}
            className="w-10 h-10 text-[#DABDFF]"
          />
        </div>
        <div>
          <h1 className="text-[#DABDFF] text-xl font-semibold">₹2500</h1>
          <p>Total payment</p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
