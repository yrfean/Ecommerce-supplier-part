import { Icon } from "@iconify/react/dist/iconify.js";

const ShippingScheduleBoxDetials = () => {

  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      <div className="flex items-center justify-center gap-4 bg-[#F8F8F8] rounded-lg h-20">
        <div>
          <Icon icon={"solar:delivery-broken"} fontSize={40} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Supplier ID:</p>
          <p className="font-semibold">123456654</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 bg-[#F8F8F8] rounded-lg h-20">
        <Icon icon={"arcticons:aurdroid"} fontSize={40} />
        <div className="flex flex-col justify-center items-center">
          <p>Shipment ID:</p>
          <p className="font-semibold">123456654</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 bg-[#F8F8F8] rounded-lg h-20">
        <Icon icon={"clarity:date-line"} fontSize={40} />
        <div className="flex flex-col justify-center items-center">
          <p>Dispatch Date:</p>
          <p className="font-semibold">21 Oct 2024</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-[#F8F8F8] rounded-lg h-20 items-center justify-center">
        <p className="text-[#47BA82]">Date of Shipping</p>
        <div className="flex flex-col items-center justify-center w-38 rounded h-7 outline outline-[#47BA82]">
          <p className="text-[#47BA82] font-semibold">21 Oct 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingScheduleBoxDetials;
