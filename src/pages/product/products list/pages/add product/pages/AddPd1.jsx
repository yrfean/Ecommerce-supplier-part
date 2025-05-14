import React, { useEffect, useRef, useState } from "react";
import Input from "../../../../../../components/Input";
import { useFormik } from "formik";
import DropdownInput from "../component/DropdownInput";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../../../../login and signup pages/components/ButtonNoIcon";
import { List } from "lucide-react";
import { useGetCategory, useGetGST } from "../../../../../../Query/Muatate";
import DropDown from "../../../../../../components/DropDown";

const AddPd1 = ({ setPage, formik, setShowExpiry }) => {
  const gstDetails = useGetGST().data;
  const categoryDetails = useGetCategory().data;
  const childRef = useRef(null);
  const imageRef = useRef(null);
  const [subCategoryOptions, setSubCategoryOptions] = useState(null);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [gst, setGst] = useState("");
  const [values, setValues] = useState({
    title: "",
    category: 2,
    subcategory: 6,
    description: "",
    brand: "",
    gst: 1,
  });

  const handleImageClick = () => {
    imageRef.current.click();
  };

  useEffect(() => {
    setSubCategoryOptions(null);
    const cat = categoryDetails?.data.find((cat) => cat.name === category);
    // return console.log(cat);
    const subs = cat?.subcategories;
    setSubCategoryOptions(subs);
    childRef.current.callChildFunction();
  }, [category]);

  useEffect(() => {
    // Only proceed if categoryDetails is loaded
    if (!categoryDetails?.data) return;

    // Category setting
    const categoryItem = categoryDetails.data.find(
      (cat) => cat.name === category
    );

    if (categoryItem) {
      formik.setFieldValue("category", categoryItem.id);

      // Setting subcategory
      const subCategoryItem = categoryItem.subcategories.find(
        (sub) => sub.name === subCategory
      );

      if (subCategoryItem) {
        formik.setFieldValue("subcategory", subCategoryItem.id);
      }
    }

    // gst
    if (gstDetails?.data) {
      const gstItem = gstDetails.data.find(
        (gstData) => gstData.gst_value === gst
      );

      if (gstItem) {
        formik.setFieldValue("gst", gstItem.id);
      }
    }
  }, [category, subCategory, gst, categoryDetails, gstDetails]);
  useEffect(() => {
    const categoryItem = categoryDetails?.data.find(
      (cat) => cat.name === category
    );
    if (categoryItem?.has_units) {
      setShowExpiry(true);
    } else {
      setShowExpiry(false);
    }
  }, [category]);

  return (
    <div className="bg-[#F8F8F8] flex items-center gap-3 w-full h-[476px] rounded-lg">
      {/* details inputs */}
      <div className="p-5 w-[47%]">
        <div>
          <label className="text-md font-semibold mb-1">Product Title</label>
          <input
            name="title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            placeholder="Product Title"
            className="w-full  mb-2 h-[40px] p-2 shadow bg-white outline-none rounded-lg"
          />
        </div>
        <div>
          <label className="text-md font-semibold mb-1">Product Category</label>
          <DropdownInput
            placeholder={"Choose Category"}
            options={categoryDetails?.data.map((cat) => cat.name)}
            setValue={setCategory}
          />
        </div>
        <div>
          <label className="text-md font-semibold mb-1">Sub Category</label>
          <DropdownInput
            placeholder={"Choose Category"}
            options={subCategoryOptions?.map((sub) => sub.name)}
            setValue={setSubCategory}
            ref={childRef}
          />
        </div>
        <div className="w-full h-[45px] mb-7">
          <DropdownInput
            label={"GST"}
            placeholder={"Pick GST"}
            name={"gst"}
            formik={formik}
            options={gstDetails?.data.map((cat) => cat.gst_value)}
            setValue={setGst}
          />
        </div>
        <div className="w-full h-[45px] mb-7">
          <label className="text-md font-semibold mb-1">Brand Name</label>
          <input
            name="brand"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Brand Name.."
            className="w-full  mb-2 h-[40px] p-2 shadow bg-white outline-none rounded-lg"
          />
        </div>
        <div>
          <label className="text-md font-semibold">Description</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            placeholder="description..."
            className="p-2 w-full outline-none font-normal bg-white rounded-lg shadow"
          ></textarea>
        </div>
      </div>
      {/* middle line */}
      <div className="w-[1.5px] bg-gray-400 h-[350px]" />

      {/* image/video uplaod inputs */}
      <div className="p-3 w-[47%]">
        {/* image uplaod */}
        <div className="bg-white flex flex-col rounded-lg p-3">
          <label className="mb-1">Product Image</label>
          <div
            onClick={() => handleImageClick()}
            className="bg-[#F8F8F8] cursor-pointer flex items-center justify-center py-1 border-2 rounded-lg border-dotted border-gray-400"
          >
            <div className="flex flex-col items-center justify-center">
              <Icon
                className="size-[50px]"
                icon={"flat-color-icons:add-image"}
              />
              <p className="text-sm">Choose File</p>
            </div>

            <input type="file" ref={imageRef} hidden name="" />
          </div>
        </div>
        <div className="relative mt-3 cursor-pointer">
          <Icon
            className="absolute text-white size-5 left-[130px] top-[6px]"
            icon={"material-symbols:upload"}
          />
          <button className="w-full font-semibold bg-[#354A5F] p-1 rounded text-white cursor-pointer">
            Upload Image{" "}
          </button>
        </div>
        {/*   product video */}
        <div className="bg-white flex flex-col rounded-lg p-3 mt-2">
          <label className="mb-1">Product Video</label>
          <div
            onClick={() => handleImageClick()}
            className="bg-[#F8F8F8] h-[73px] cursor-pointer flex items-center justify-center py-1 border-2 rounded-lg border-dotted border-gray-400"
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-md font-semibold">Upload Video</h1>
              <p className="text-sm text-gray-500">Videos must be funny</p>
            </div>

            <input type="file" ref={imageRef} hidden name="" />
          </div>
        </div>
        <div className="relative mt-3 cursor-pointer">
          <Icon
            className="absolute text-white size-5 left-[130px] top-[6px]"
            icon={"material-symbols:upload"}
          />
          <button className="w-full font-semibold bg-[#354A5F] p-1  rounded text-white cursor-pointer">
            Upload Video
          </button>
        </div>

        <div
          onClick={() => {
            setPage(2);
          }}
          className="mt-11"
        >
          <Button value={"Next "} />
        </div>
      </div>
    </div>
  );
};

export default AddPd1;
