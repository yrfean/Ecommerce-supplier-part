import { Plus } from "lucide-react";
import DropdownInput from "./../../products list/pages/add product/component/DropdownInput";
const StorageAdding = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold mt-2 mb-5">
        Advance Storage Adding
      </h1>

      {/* adding inputs */}
      <div className="bg-[#F6FBF8] rounded-lg w-full h-[300px] px-28 py-5">
        <div className="mb-3">
          <DropdownInput
            label={"Batch"}
            placeholder={"Select Batch"}
            options={["batch 1", "batch 2"]}
          />
        </div>
        <div className="">
          <DropdownInput
            label={"Stock Details"}
            placeholder={"Select Stock Details"}
            options={["details 1", "batch 2"]}
          />
        </div>
        <div className="w-full flex items-center justify-end gap-4 mt-20">
          <div className="h-10 w-30 cursor-pointer text-white rounded-lg bg-[#3BC288] flex items-center justify-center">
            Submit
          </div>
          <div className="h-10 w-30 cursor-pointer text-white rounded-lg bg-[#354A5F] flex gap-1 items-center justify-center">
            <Plus size={20} />
            <p>Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageAdding;
