import React from "react";
import Input from "../../../../../../components/Input";
import AddProductInput from "../component/AddProductInput";
import DropDown from "../../../../../../components/DropDown";
import { Plus } from "lucide-react";

const quantites = ["Kg", "g"];

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
      <div
        className="bg-[#F8F8F8] p-3 w-full h-[345px] rounded-lg overflow-auto "
      >
        {/* batchnumber/createddate/quantity(optional) */}
        <div className="flex justify-between ">
          <div className="w-[30%]">
            <AddProductInput
              label={"Batch Number"}
              placeholder={"Batch Number"}
            />
          </div>
          <div className="w-[30%]">
            <AddProductInput label={"Created Date"} placeholder={"00/00/00"} />
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
          <h1 className="text-xl mt-4 mb-2 font-semibold">Stock Details</h1>
          {/* unit/quantity */}
          <div className="flex gap-3 items-center">
            <div className="w-4/5">
              <AddProductInput
                label={"Quantity"}
                placeholder={"Enter Quantity"}
              />
            </div>
            <div className="w-1/5 h-[36px] mt-6">
              <DropDown
                options={quantites}
                placeholder={"Unit"}
                bg={"bg-white"}
              />
            </div>
          </div>
          {/* packet in numbers */}
          <div className="mt-2">
            <AddProductInput
              label={"Packet in numbers"}
              placeholder={"Enter packet number"}
            />
          </div>
          {/* expry / manufacture date */}
          <div className="w-full flex justify-around mt-2">
            <div className="w-[40%]">
              <AddProductInput label={"Expiry Date"} placeholder={"00/00/00"} />
            </div>
            <div className="w-[40%]">
              <AddProductInput
                label={"Manufacture Date"}
                placeholder={"00/00/00"}
              />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <div className="text-white flex cursor-pointer items-center px-3 gap-1 font-semibold bg-[#354A5F] rounded-lg h-[40px]">
              <Plus />
              <p>Add Next unit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end gap-3 mt-3">
        <div className="h-[40px] w-[100px] outline cursor-pointer text-center pt-2 outline-[#47BA82] text-[#47BA82] rounded-lg">
          Cancel
        </div>
        <div
          onClick={() => setPage(3)}
          className="h-[40px] outline w-[100px] cursor-pointer text-center pt-2 bg-[#47BA82] hover:bg-[#3DA372] transition-all duration-300 text-white rounded-lg"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default AddPd2;
