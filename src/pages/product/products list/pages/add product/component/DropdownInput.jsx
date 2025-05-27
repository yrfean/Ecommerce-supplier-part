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
    <div className="h-ful h-[40px relative">
      <label className="text-md tracking-wide">{label}</label>
      <div
        onClick={() => setIsDown((prev) => !prev)}
        className="relative w-full h-full cursor-pointer"
      >
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          className="w-full h-ful p-2 px-3 shado outline outline-gray-300  bg-white rounded-lg placeholder:text-left  text-center"
          value={chose || ""}
          disabled
        />
        <ChevronDown
          // onClick={() => setIsDown((prev) => !prev)}
          className={`absolute cursor-pointer text-gray-400 top-[10px] right-[20px] transition-all duration-300 ${
            isDown ? "rotate-180" : ""
          }`}
        />
      </div>
      {isDown && (
        <div className="w-full absolute mt-1 z-100 text-center shadow">
          {options ? (
            options?.map((cat, index) => (
              <div
                key={index}
                onClick={() => {
                  handleChose(cat);
                  // formik.setFieldValue("gst", cat);  lets set it after fetching gst vals
                }}
                className={`font-semibold p-1 cursor-pointer w-full bg-white hover:bg-[#F8F8F8] ${
                  options.length - 1 === index
                    ? "rounded-br-lg rounded-bl-lg"
                    : ""
                }`}
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
