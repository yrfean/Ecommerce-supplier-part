import React from "react";
import Input from "../../../../../../components/Input";
import AddProductInput from "../component/AddProductInput";

const AddPd2 = ({ setPage }) => {
  return (
    <div>
      {/*low stock alert */}
      <div className="w-[250px] mb-4">
        <p className="font-medium">Low Stock Alert</p>
        <input
          type="text"
          name=""
          placeholder="Low stock alert"
          className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
        />
      </div>

      {/* body div */}
      <div className="bg-[#F8F8F8] p-3 w-full h-[362px] rounded-lg">
        {/* batchnumber/createddate/quantity(optional) */}
        <div className="flex justify-between">
          <div className="w-[30%]">
            <AddProductInput
              label={"Batch Number"}
              placeholder={"Batch Number"}
            />
          </div>
          <div className="w-[30%]">
            <AddProductInput
              label={"Created Date"}
              placeholder={"00/00/00"}
            />
          </div>
          <div className="w-[30%]">
            <AddProductInput
              label={"Quantity (Optional)"}
              placeholder={"Quantity (Optional)"}
            />
          </div>
        </div>

        {/* Stock details */}
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default AddPd2;
