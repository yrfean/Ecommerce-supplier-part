import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropDown = ({ setValue, options, placeholder, bg }) => {
  const [isDown, setIsDown] = useState(false);
  const [chosen, setChosen] = useState(false);

  return (
    <div className={`relative  w-full ${bg} h-full rounded-lg `}>
      <div
        onClick={() => setIsDown((prev) => !prev)}
        className="flex items-center w-full justify-between px-4 py-1 h-full cursor-pointer"
      >
        <p className="font-semibold w-full truncate">{chosen || placeholder}</p>
        <ChevronDown
          className={`transition-transform ${isDown ? "rotate-180" : ""}`}
        />
      </div>
      {isDown && (
        <div
          className={`absolute top-full overflow-x-hidden custom-scrollbar overflow-y-scroll left-0 w-full ${bg} shadow-md z-10`}
        >
          {options.map((opt, index) => {
            if(opt===chosen)return
            return<p
              key={index}
              onClick={() => {
                setChosen(opt);
                setIsDown(false);
                setValue(opt);
                setValue && setValue(opt);
              }}
              className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-100"
            >
              {opt}
            </p>;
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
