import React, { useEffect, useState } from "react";
import AddProductTable from "./components/AddProductTable";
import StockForm from "./components/StockForm";

const AddPd2 = ({
  setPage,
  formik,
  showExpiry,
  stockDetails,
  setStockDetails,
  units,
}) => {
  const [editThisStockDetails, setEditThisStockDetails] = useState(null);
  const [lsaIsEmpty, setLsaIsEmpty] = useState("");
  const [bnIsEmpty, setBnIsEmpty] = useState("");
  const [mfdIsEmpty, setMfdIsEmpty] = useState("");
  const [edIsEmpty, setEdIsEmpty] = useState("");
  const [edAIsEmpty, setEdaIsEmpty] = useState("");

  return (
    <div>
      {/*low stock alert and other inputs */}
      <div className="w-[250px grid grid-cols-3 space-y-2 gap-4">
        <div className="h-[45px]">
          <p className="font-medium">Low Stock Alert</p>
          <input
            onChange={(e) => {
              formik.handleChange(e);
              setLsaIsEmpty(e.target.value);
            }}
            type="number"
            min="0"
            step={"1"}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            name="units[0].low_stock_alert"
            placeholder="Low stock alert"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>

        <div className="h-[45px]">
          <p className="font-medium">Quantity (Optional)</p>
          <input
            type="number"
            min="0"
            step={"1"}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            onChange={formik.handleChange}
            name="units[0].quantity"
            placeholder="Quantity (Optional)"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>
        <div className="h-[45px]">
          <p className="font-medium">Batch Number</p>
          <input
            onChange={(e) => {
              formik.handleChange(e);
              setBnIsEmpty(e.target.value);
            }}
            type="number"
            min="0"
            step={"1"}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            name="units[0].batch_number"
            placeholder="Enter batch number"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>
        <div className="h-[45px] mb-2">
          <p className="font-medium">Manufacture Date</p>
          <input
            onChange={(e) => {
              formik.handleChange(e);
              setMfdIsEmpty(e.target.value);
            }}
            type="date"
            // onFocus={(e) => (e.target.type = "date")}
            // onBlur={(e) => {
            //   if (!e.target.value) e.target.type = "text";
            // }}
            name="units[0].manufacturing_date"
            placeholder="00/00/0000"
            className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
          />
        </div>
        {showExpiry ? (
          <>
            <div className="h-[45px]">
              <p className="font-medium">Expiry Date</p>
              <input
                onChange={(e) => {
                  formik.handleChange(e);
                  setEdIsEmpty(e.target.value);
                }}
                name="units[0].expiry_date"
                placeholder="00/00/0000"
                type="date"
                className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
              />
            </div>
            <div className="h-[45px]">
              <p className="font-medium">Expiry Alert Days</p>
              <input
                onChange={(e) => {
                  formik.handleChange(e);
                  setEdaIsEmpty(e.target.value);
                }}
                type="text"
                name="units[0].expiry_notification_days"
                placeholder="eg:10"
                className="w-full h-full outline-none bg-[#F8F8F8] px-2 py-2 rounded-lg"
              />
            </div>
          </>
        ) : null}
      </div>

      {/* body div */}
      <div className="bg-[#F8F8F8] mt-6 p-3 w-full h-[349px] rounded-lg overflow-auto ">
        {/* STOCK details */}
        <h1 className="text-xl font-semibold mb-2">Stock Details</h1>
        <div>
          <StockForm
            editThisStockDetails={editThisStockDetails}
            setEditThisStockDetails={setEditThisStockDetails}
            units={units}
            setStockDetails={setStockDetails}
          />
        </div>
        {/* line */}
        <div className="w-full bg-gray-200 h-[2px] mt-2" />
        {/* titles */}
        <AddProductTable
          titles={["Quantity", "Unit", "Price", "MRP", "Packets"]}
          values={stockDetails}
          setStockDetails={setStockDetails}
          stockDetails={stockDetails}
          setEditThisStockDetails={setEditThisStockDetails}
        />
      </div>
      <div className="w-full flex justify-end gap-3 mt-3 mb">
        <>
          <div className="h-[40px] w-[100px] outline cursor-pointer text-center pt-2 outline-[#47BA82] text-[#47BA82] rounded-lg">
            Cancel
          </div>
          <div
            onClick={() => {
              // if (
              //   lsaIsEmpty ||
              //   bnIsEmpty ||
              //   mfdIsEmpty ||
              //   edAIsEmpty ||
              //   edIsEmpty
              // ) {
              //   return alert("Please fill all inputs");
              // }
              formik.handleSubmit();
              location.href = "/product";
              // setPage(3);
            }}
            className="h-[40px] outline w-[100px] cursor-pointer text-center pt-2 bg-[#47BA82] hover:bg-[#3DA372] transition-all duration-300 text-white rounded-lg"
          >
            Next
          </div>
        </>
      </div>
    </div>
  );
};
export default AddPd2;
