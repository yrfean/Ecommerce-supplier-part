import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as yup from "yup";
import { Icon } from "@iconify/react/dist/iconify.js";

import Calender from "../../../../components/DatePicker";
import DropdownInput from "../../products list/pages/add product/component/DropdownInput";
import Button from "../../../../login and signup pages/components/ButtonNoIcon";

const validationSchema = yup.object({
  adv_type: yup.string().required("Advertisement type is required"),
  product_id: yup.string().required("Product ID is required"),
  division: yup.string().required("Division is required"),
  start_from: yup.date().required("Start date is required"),
  end_from: yup
    .date()
    .required("End date is required")
    .min(yup.ref("start_from"), "End date cannot be before start date"),
});
const Schedule = () => {
  const imageRef = useRef(null);

  const handleImageClick = () => {
    imageRef.current.click();
  };
  const formik = useFormik({
    initialValues: {
      adv_type: "",
      product_id: "",
      division: "",
      start_from: "",
      end_from: "",
    },
    validationSchema,
    onSubmit: (val) => {
      alert(val);
    },
  });
  return (
    <div className="flex items-center gap-3 bg-[#F8F8F8] mt-3 rounded-lg">
      {/* inputs */}
      <div className="p-4 w-[47%] space-y-4 mb-10">
        <div>
          <label className="text-md font-semibold mb-1">
            Advertisement Type
          </label>
          <DropdownInput
            placeholder={"Select Adv Type"}
            options={["Adv 1", "Adv 2", "Adv 3", "Adv 4"]}
            setValue={(value) => formik.setFieldValue("adv_type", value)}
          />
        </div>
        <div>
          <label className="text-md font-semibold mb-1">Product ID</label>
          <DropdownInput
            placeholder={"Select Product ID"}
            options={["Adv 1", "Adv 2", "Adv 3", "Id 13"]}
            setValue={(value) => formik.setFieldValue("product_id", value)}
          />
        </div>

        <div>
          <label className="text-md font-semibold mb-1">Division</label>
          <DropdownInput
            placeholder={"Select Division"}
            options={["Div 1", "Div 2", "Div 3"]}
            setValue={(value) => formik.setFieldValue("division", value)}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div>
            <label className="text-md font-semibold mb-1">Start From</label>
            <Calender
              setValue={(value) => formik.setFieldValue("start_from", value)}
            />
          </div>
          <div>
            <label className="text-md font-semibold mb-1">End From</label>
            <Calender
              setValue={(value) => formik.setFieldValue("end_from", value)}
            />
          </div>
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
            formik.handleSubmit();
          }}
          className="mt-3"
        >
          <Button value={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
