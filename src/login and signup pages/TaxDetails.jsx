import React from "react";
import PageProgresser from "./components/PageProgresser";
import Input from "../components/Input";

const TaxDetails = () => {
  return (
    <div>
      {/* top things */}
      <h1 className="text-2xl font-bold mb-1">Tax details</h1>
      <p className="text-md text-gray-700">Fill supplier tax details</p>
      {/* page progress bar */}
      <PageProgresser />

      {/* input */}
      <div className="mt-24 p-5">
        <p className="text-xl mb-2">Enter your GSTN Number</p>
        <div className="flex items-center justify-center gap-2">
          <Input placeholder={"GSTN number"} />
          <button className="w-[95px] mb-3 h-[50px] cursor-pointer text-center rounded-lg text-white bg-[#364960]">
            Verify
          </button>
        </div>
      </div>
      <div className="flex mt-7 w-full justify-end gap-3">
        <button
          onClick={() => setNewLocationModal(false)}
          className="bg-[#F6FBF8] cursor-pointer w-34 h-10 py-1 transition-all duration-300 rounded-lg font-semibold text-[#47BA82] hover:bg-[#47BA82] hover:text-white outline outline-[#47BA82]"
        >
          Cancel
        </button>
        <button className="bg-[#47BA82] cursor-pointer w-34 h-10 py-1 transition-all duration-300 rounded-lg font-semibold text-white hover:bg-[#3DA372] outline outline-[#47BA82]">
          Next
        </button>
      </div>
    </div>
  );
};

export default TaxDetails;
