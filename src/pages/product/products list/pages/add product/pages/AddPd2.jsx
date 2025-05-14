import React, { useState } from "react";
import Input from "../../../../../../components/Input";
import AddProductInput from "../component/AddProductInput";
import DropDown from "../../../../../../components/DropDown";
import { Edit, Plus, X } from "lucide-react";
import DropdownInput from "../component/DropdownInput";
import OrdersTable from "../../../../../order/components/OrdersTable";
import CancelAndNext from "./components/CancelAndNext";

const quantites = ["Kg", "g"];

const stock_details = [
  {
    id: "",
    unit_quantity: "",
    unit: 1,
    packets: "",
    mrp: "",
    selling_price: "",
  },
];

const AddPd2 = ({ setPage, formik, showExpiry }) => {
  const [inputs, setInputs] = useState([{ id: 0 }]);
  const [nextId, setNextid] = useState(1);
  const [stockDetails, setStockDetails] = useState([]);

  console.log(showExpiry);
  const titles = [
    "Quantity",
    "Unit",
    "Price",
    "MRP",
    "Packets",
    "Manufacture Date",
  ];

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    const updatedDetails = [...stock_details];

    updatedDetails[index][name] = value;
    updatedDetails[index].id = index;

    setStockDetails(updatedDetails);

    console.log(updatedDetails);
  };

  return (
    <div>
      {/*low stock alert */}
      <div className="w-[250px grid grid-cols-2 space-y-2 fle gap-4">
        <div className="h-[45px]">
          <p className="font-medium">Low Stock Alert</p>
          <input
            type="text"
            name=""
            placeholder="Low stock alert"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>

        <div className="h-[45px]">
          <p className="font-medium">Quantity (Optional)</p>
          <input
            type="text"
            name=""
            placeholder="Quantity (Optional)"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>
        <div className="h-[45px]">
          <p className="font-medium">Batch Number</p>
          <input
            type="text"
            name=""
            placeholder="Enter batch number"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>
        <div className="h-[45px]">
          <p className="font-medium">Expiry Alert Date</p>
          <input
            type="text"
            name=""
            placeholder="Expiry alert date"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>
      </div>

      {/* body div */}
      <div className="bg-[#F8F8F8] mt-6 p-3 w-full h-[349px] rounded-lg overflow-auto ">
        {/* batch details */}
        <h1 className="text-xl font-semibold mb-2">Stock alert</h1>
        <div className="grid grid-cols-7 gap-3">
          <div className="w-[140px">
            <AddProductInput label={"Quantity"} placeholder={"Quantity"} />
          </div>
          <div className="w-[100px">
            <DropdownInput label={"Unit"} placeholder={"Unit"} />
          </div>
          <div className="">
            <AddProductInput label={"MRP"} placeholder={"MRP"} />
          </div>
          <div className="">
            <AddProductInput label={"Price"} placeholder={"Price"} />
          </div>
          <div className="">
            <AddProductInput
              label={"Expiry Date"}
              placeholder={"Expiry Date"}
            />
          </div>
          <div className="w-[170px]">
            <AddProductInput
              label={"Manufacture Date"}
              placeholder={"Manufacture Date"}
            />
          </div>
          <div
            onClick={() => {
              setNextid((prev) => prev + 1);
            }}
            className="bg-[#354A5F] text-white flex items-center justify-center rounded-md h-[34px] ml-15 mt-6 w-[50px] cursor-pointer"
          >
            <Plus />
          </div>
        </div>
        {/* line */}
        <div className="w-full bg-gray-200 h-[2px] my-2" />
        {/* titles */}
      </div>
      <div className="w-full flex justify-end gap-3 mt-3 mb">
        <CancelAndNext />
      </div>
    </div>
  );
};
export default AddPd2;
