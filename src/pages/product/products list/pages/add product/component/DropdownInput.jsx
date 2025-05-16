import { ArrowDown, ChevronDown } from "lucide-react";
import { useEffect, useImperativeHandle, useState } from "react";

const DropdownInput = ({
  placeholder,
  label,
  name,
  setValue,
  formik,
  options,
  ref,
}) => {
  const [chose, setChose] = useState(null);
  const [isDown, setIsDown] = useState(false);
  const handleChose = (cat) => {
    setChose(cat);
    setIsDown(false);
    setValue(cat);
    
  };

  const changeChosen = () => {
    setChose(null);
  };
  useImperativeHandle(ref, () => ({
    callChildFunction: changeChosen,
  }));

  return (
    <div className="h-full relative">
      <label className="text-md font-semibold">{label}</label>
      <div
       
        className="relative w-full h-full cursor-pointer"
      >
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          className="w-full h-ful p-2 shado bg-white outline-none rounded-lg "
          value={chose || ""}
          disabled
          
        />
        <ChevronDown
          onClick={() => setIsDown((prev) => !prev)}
          className={`absolute cursor-pointer text-gray-400 top-[10px] right-[20px] transition-all duration-300 ${
            isDown ? "rotate-180" : ""
          }`}
        />
      </div>
      {isDown && (
        <div className="w-full absolute z-100 text-center">
          {options ? (
            options?.map((cat,index) => (
              <div
              key={index}
                onClick={() => {
                  handleChose(cat);
                  // formik.setFieldValue("gst", cat);  lets set it after fetching gst vals
                }}
                className="font-semibold p-1 cursor-pointer w-full bg-white hover:bg-[#F8F8F8]"
              >
                {cat}{" "}
              </div>
            ))
          ) : (
            <div className="font-semibold p-1 cursor-pointer w-full bg-white hover:bg-[#F8F8F8]">
              No options rightaway
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
