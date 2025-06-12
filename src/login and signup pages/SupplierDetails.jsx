import React, { useRef, useState } from "react";
import PageProgresser from "./components/PageProgresser";
import { Plus } from "lucide-react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../components/Input";
import DropDown from "../components/DropDown";

const categories = [
  "Pikachu",
  "Charmander",
  "Bulbasaur",
  "Squirtle",
  "Jigglypuff",
];

const validationSchema = yup.object({
  supplierName: yup.string().required("Supplier name is required"),
  companyName: yup.string().required("Company name is required"),
  category: yup.string().required("Category is required"),
  address: yup.string().required("Address is required"),
  place: yup.string().required("Place is required"),
  district: yup.string().required("District is required"),
  state: yup.string().required("State is required"),
});

const SupplierDetails = () => {
  const inputRef = useRef(null);
  const formData = new FormData();
  const [selectedCategory, setSeleectedCategory] = useState(null);

  // profile photo handles
  const handleFileInputClick = () => {
    inputRef.current.click();
  };
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    formData.append(file, "profile photo");
  };

  // formik
  const formik = useFormik({
    initialValues: {
      supplierName: "",
      companyName: "",
      category: "",
      address: "",
      place: "",
      district: "",
      state: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="-my-8 h-[90vh] w-full overflow-hidden">
      {/* top things */}
      <h1 className="text-2xl font-bold mb-1">Supplier details</h1>
      <p className="text-md text-gray-700">Fill supplier information</p>
      <PageProgresser />

      {/* profile picture upload */}
      <h1 className="text-xl font-semibold mb-3">Profile picture upload</h1>
      <div className="cursor-pointer  flex gap-6">
        {/* img */}
        <div
          onClick={handleFileInputClick}
          className="hover:shadow-xl transition-all duration-300 rounded-full  relative"
        >
          <div className="absolute -right-[3px] bottom-[10px] p-1 bg-[#47BA82] text-center rounded-full">
            <Plus className="w-5 h-5 text-white" />
          </div>
          <img
            src="/noProfile.jpeg"
            alt="profile photo"
            className="w-[90px] h-[90px] rounded-full outline-dotted outline outline-[#47BA82] object-cover"
          />
        </div>
        {/* texts with img upload btn */}
        <div className="">
          <p className="text-base text-gray-700 font-semibold">
            Upload your photo
          </p>
          <p className="text-sm mb-3 text-gray-600">
            ~Kindly upload professional photo
          </p>
          <input
            onChange={handleInputChange}
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
          />
          <button
            onClick={handleFileInputClick}
            className="bg-[#47BA82] px-5 rounded font-semibold py-1 text-white cursor-pointer"
          >
            Browse photo
          </button>
        </div>
      </div>

      {/* Personal information */}
      <h1 className="text-xl mt-4 mb-3 font-semibold">Personal information</h1>
      <div className="grid grid-cols-2 gap-x-3 gap-y-0">
        {/* supplier name */}
        <div>
          <label className="">Supplier name</label>
          <Input
            formik={formik}
            name="supplierName"
            type="text"
            placeholder="Enter your name..."
          />
        </div>
        {/* company name */}
        <div>
          <label className="">Company name</label>
          <Input
            formik={formik}
            name="companyName"
            type="text"
            placeholder="Enter your company name..."
          />
        </div>
        {/* categories */}
        <div className="relative w-full">
          <label>Categories</label>
          <div className="absolute w-full ">
            <DropDown
              setvalue={setSeleectedCategory}
              options={categories}
              placeholder="Select your category"
              bg={"bg-[#F6FBF8]"}
            />
          </div>
        </div>
        {/* state and dist */}
        <div className="flex w-full">
          <div className="w-[50%]">
            <label htmlFor="">District</label>
            <DropDown
              options={categories}
              placeholder={"District"}
              setValue=""
              bg={"bg-[#F6FBF8]"}
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="">State</label>
            <DropDown
              options={categories}
              placeholder={"State"}
              setValue=""
              bg={"bg-[#F6FBF8]"}
            />
          </div>
        </div>
        {/* address */}
        <div>
          <label className="">Address</label>
          <Input
            formik={formik}
            name="address"
            type="text"
            placeholder="Enter your address..."
          />
        </div>
        {/* Place */}
        <div>
          <label className="">Place</label>
          <Input
            formik={formik}
            name="place"
            type="text"
            placeholder="Enter your place..."
          />
        </div>
      </div>
      <div className="flex w-full justify-end gap-3">
        <button className="bg-[#F6FBF8] cursor-pointer w-34 py-1 transition-all duration-300 rounded-lg font-semibold text-[#47BA82] hover:bg-[#47BA82] hover:text-white outline outline-[#47BA82]">
          Cancel
        </button>
        <button
          onClick={() => formik.handleSubmit()}
          className="bg-[#47BA82] cursor-pointer w-34 py-1 transition-all duration-300 rounded-lg font-semibold text-white hover:bg-[#3DA372] outline outline-[#47BA82]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SupplierDetails;
