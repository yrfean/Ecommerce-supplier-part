import Button from "../../../../../../login and signup pages/components/ButtonNoIcon";
import AddProductInput from "../component/AddProductInput";

const AddPd3 = ({ formik }) => {
  return (
    <div>
      <h1 className="text-md my-2 font-semibold">Assign Price</h1>
      {/* slling price/MRP */}
      <div className="bg-[#F8F8F8] rounded-lg p-3 flex gap-3 justify-evenly items-center">
        <div>
          <AddProductInput
            label={"Selling Price"}
            placeholder={"Enter your Price"}
          />
        </div>
        <div className="">
          <AddProductInput label={"MRP"} placeholder={"MRP..."} />
        </div>
      </div>
      <div className="flex justify-end">
        <div onClick={() => formik.handleSubmit()} className="w-[130px] mt-7">
          <Button value={"Next"} />
        </div>
      </div>
    </div>
  );
};

export default AddPd3;
