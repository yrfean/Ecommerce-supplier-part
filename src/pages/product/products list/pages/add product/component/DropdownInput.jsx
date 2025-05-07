import { ArrowDown, ChevronDown } from "lucide-react";
import { useState } from "react";

const cats = ["Cats", "Dogs", "Giraffesss"];

const DropdownInput = ({ placeholder, label }) => {
  const [isDown, setIsDown] = useState(false);
  const handleChose = (e) => {
    setIsDown(false);
    console.log(e);
  };

  return (
    <div className="h-full relative">
      <label className="text-md font-semibold">{label} </label>
      <div className="relative h-full">
        <input
          type="text"
          placeholder={placeholder}
          name=""
          className="w-full h-ful p-2 shadow bg-white outline-none rounded-lg"
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
          {cats.map((cat) => (
            <div
              onClick={(e) => handleChose(e)}
              className="font-semibold p-1 cursor-pointer w-full bg-white hover:bg-[#F8F8F8]"
            >
              {cat}{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
