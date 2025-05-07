import React, { useRef } from "react";
import Input from "../../../../../../components/Input";
import { useFormik } from "formik";
import DropdownInput from "../component/DropdownInput";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../../../../login and signup pages/components/ButtonNoIcon";
import { List } from "lucide-react";

const AddPd1 = ({ setPage }) => {
  const imageRef = useRef(null);

  const handleImageClick = () => {
    imageRef.current.click();
  };
  return (
    <div className="bg-[#F8F8F8] flex items-center gap-3 w-full h-[436px] rounded-lg">
      {/* details inputs */}
      <div className="p-5 w-[47%]">
        <div>
          <label className="text-md font-semibold mb-1">Product Title</label>
          <input
            type="text"
            placeholder="Product Title"
            className="w-full  mb-2 h-[40px] p-2 shadow bg-white outline-none rounded-lg"
          />
        </div>
        <div className="w-full h-[45px] mb-7">
          <DropdownInput
            label={"Product Categories"}
            placeholder={"Porduct Categories"}
          />
        </div>
        <div className="w-full h-[45px] mb-7">
          <DropdownInput
            label={"Sub Categories"}
            placeholder={"Sub Categories"}
          />
        </div>
        <div className="w-full h-[45px] mb-7">
          <DropdownInput label={"Brand Name"} placeholder={"Brand Name"} />
        </div>
        <div>
          <label className="text-md font-semibold">Brand</label>
          <textarea
            name=""
            placeholder="Y dont u tell about your brand..."
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
          <button className="w-full  font-semibold bg-[#354A5F] p-1  rounded text-white cursor-pointer">
            Upload Video{" "}
          </button>
        </div>

        <div onClick={() => setPage(2)} className="mt-3">
          <Button value={"Next "} />
        </div>
      </div>
    </div>
  );
};

export default AddPd1;
