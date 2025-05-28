import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FilterOrSorting = ({ setValue, icon: Icon, options, placeholder }) => {
  const [isDown, setIsDown] = useState(false);
  const [chosen, setChosen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // If click is NOT inside dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDown(false);
      }
    }

    // Listen for all clicks on the page
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center px- w-full bg-white h-[45px] rounded-lg"
    >
      {Icon ? <Icon className="min-w-5 min-h-5 ml-2" /> : null}
      <div
        onClick={() => setIsDown((prev) => !prev)}
        className="flex items-center w-full justify-between px-2 py-1 h-full cursor-pointer"
      >
        <p className="font-semibold w-full truncate">{chosen || placeholder}</p>
        <ChevronDown
          className={`transition-transform ${isDown ? "rotate-180" : ""}`}
        />
      </div>
      {isDown && (
        <div className="absolute top-full overflow-x-hidden custom-scrollbar overflow-y-scroll left-0 w-full bg-[#F6FBF8] shadow-md z-100">
          {options.map((opt, index) => (
            <p
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
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterOrSorting;
