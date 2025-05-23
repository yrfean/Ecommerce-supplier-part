import { Formik, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import validationSchema from "../validationscehma/validationschema";

const StockForm = ({
  units,
  setStockDetails,
  setEditThisStockDetails,
  editThisStockDetails,
}) => {
  const [isDown, setIsDown] = useState(false);
  const [chose, setChose] = useState("");


  return (
    <Formik
      enableReinitialize
      initialValues={{
        unit_quantity: editThisStockDetails?.unit_quantity || "",
        unit: editThisStockDetails?.unit || "",
        selling_price: editThisStockDetails?.selling_price || "",
        mrp: editThisStockDetails?.mrp || "",
        packets: editThisStockDetails?.packets || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (editThisStockDetails) {
          setEditThisStockDetails(null);
        }
        setStockDetails((prev) => [...prev, values]);
        resetForm(); // clear form after saving
        setChose(""); // reset dropdown shown text too
      }}
    >
      {({ handleChange, handleSubmit, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <div className="flex px-2 gap-5 w-full items-end">
            {/* Quantity */}
            <div className="w-[140px]">
              <div className="">
                <label className="text-md font-medium">Quantity</label>
                <input
                  required={true}
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
                  name="unit_quantity"
                  onChange={handleChange}
                  value={values.unit_quantity}
                  placeholder="Enter quantity"
                  className="w-full outline-none bg-white h-[45px] px-2 py-2 rounded-lg"
                />
              </div>
              <div className="h-[10px]">
                <ErrorMessage
                  name="unit_quantity"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>
            {/* Unit */}
            <div className="w-[100px] relative">
              <div>
                <label className="text-md font-semibold">Unit</label>
                <input
                  required
                  type="text"
                  name="unit"
                  value={chose}
                  placeholder="Unit"
                  disabled
                  className="w-full h-11 p-2 bg-white outline-none rounded-lg"
                />
                <ChevronDown
                  onClick={() => setIsDown((prev) => !prev)}
                  className={`absolute cursor-pointer text-gray-400 top-[34px] right-[10px] transition-all duration-300 ${
                    isDown ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="h-[10px]">
                <ErrorMessage
                  name="units"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              {isDown && (
                <div className="absolute z-50 w-full bg-white text-center mt-1 rounded shadow-md">
                  {units?.data?.length ? (
                    units.data.map((cat, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setChose(cat.name);
                          setFieldValue("unit", cat.name);
                          setIsDown(false);
                        }}
                        className="font-semibold p-1 cursor-pointer hover:bg-[#F8F8F8]"
                      >
                        {cat.name}
                      </div>
                    ))
                  ) : (
                    <div className="p-1 text-gray-400">No options</div>
                  )}
                </div>
              )}
            </div>

            {/* Price */}
            <div>
              <div>
                <label className="text-md font-medium">Price</label>
                <input
                  required
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
                  name="selling_price"
                  value={values.selling_price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="w-full outline-none bg-white h-[45px] px-2 py-2 rounded-lg"
                />
              </div>
              <div className="h-[10px]">
                <ErrorMessage
                  name="selling_price"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            {/* MRP */}
            <div>
              <div>
                <label className="text-md font-medium">MRP</label>
                <input
                  required
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
                  name="mrp"
                  value={values.mrp}
                  onChange={handleChange}
                  placeholder="MRP"
                  className="w-full outline-none bg-white h-[45px] px-2 py-2 rounded-lg"
                />
              </div>
              <div className="h-[10px]">
                <ErrorMessage
                  name="mrp"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            {/* Packets */}
            <div className="w-[190px]">
              <div>
                <label className="text-md font-medium">Packet No.</label>
                <input
                  required
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
                  name="packets"
                  value={values.packets}
                  onChange={handleChange}
                  placeholder="Packets number.."
                  className="w-full outline-none bg-white h-[45px] px-2 py-2 rounded-lg"
                />
              </div>
              <div className="h-[10px]">
                <ErrorMessage
                  name="packets"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            {/* Add Button */}
            <div
              onClick={handleSubmit}
              className="bg-[#354A5F] mb-[15px] text-white flex items-center justify-center rounded-md h-[34px] w-[70px] cursor-pointer"
            >
              <button type="" className="cursor-pointer">
                <Plus />
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StockForm;
