import AddProductInput from "../component/AddProductInput";

const AddPd3 = () => {
  return (
    <div>
      <h1 className="text-md my-2 font-semibold">Assign Price</h1>
      {/* slling price/MRP */}
      <div className="bg-[#F8F8F8] rounded-lg p-3 flex">
        <div>
         <AddProductInput label={"Selling Price"} placeholder={"Enter your Price"}/>
        </div>
        <div>
         <AddProductInput label={""} placeholder={"Enter your Price"}/>
        </div>
      </div>
    </div>
  );
}

export default AddPd3