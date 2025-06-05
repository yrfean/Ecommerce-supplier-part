import { ChevronDown, Landmark, Vault } from "lucide-react";

const BankTransfer = ({ setShowMethodModal }) => {
  return (
    <div>
      <div className="flex items-center justify-evenly gap-[6%]">
        <div
          onClick={() => setShowMethodModal(true)}
          className="w-[47%] cursor-pointer h-13 bg-[#F5F5F5] rounded-lg flex items-center justify-between px-4"
        >
          <div className="flex gap-3 items-center">
            <Landmark size={18} />
            <p className="font-medium">Bank Transfer</p>
          </div>
          <ChevronDown />
        </div>
        <div
          onClick={() => setShowMethodModal(true)}
          className="w-[47%] cursor-pointer h-13 bg-[#F5F5F5] rounded-lg flex items-center justify-between px-4"
        >
          <div className="flex gap-3 items-center">
            <Vault size={18} />
            <p className="font-medium">Choose Bank</p>
          </div>
          <ChevronDown />
        </div>
      </div>

      {/* Recipient  AC Details */}
      <h1 className="text-xl font-medium mt-2">Recipient AC Details</h1>
      <div className="flex justify-center flex-wrap items-center gap-[6%]">
        <div className="w-[47%]">
          <label htmlFor="">Branch</label>
          <input
            type="text"
            placeholder="XXXXXX242XXX"
            name=""
            className="w-full outline-non h-12 outline outline-gray-200 rounded-lg flex items-center justify-between px-4"
          />
        </div>
        <div className="w-[47%]">
          <label htmlFor="">Account Number</label>
          <input
            type="text"
            placeholder="XXXXXX242XXX"
            name=""
            className="w-full outline outline-gray-200 h-12  rounded-lg flex items-center justify-between px-4"
          />
        </div>
        <div className="w-[47%]">
          <label htmlFor="">IFSC Code</label>
          <input
            type="text"
            placeholder="XXXXXX242XXX"
            name=""
            className="w-full outline outline-gray-200  h-12 rounded-lg flex items-center justify-between px-4"
          />
        </div>
        <div className="w-[47%] mt-6  cursor-pointer h-12 bg-[#47BA82] hover:bg-[#47BA82]/90 rounded-lg flex items-center justify-center font-semibold text-white px-4">
          Pay
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
