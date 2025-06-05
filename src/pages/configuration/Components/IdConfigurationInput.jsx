import { Check } from "lucide-react";
import { useState } from "react";

const IdConfigurationInput = () => {
  const [isPrefixChecked, setIsPrefixChecked] = useState(false);
  const [isPostfixChecked, setIsPostfixChecked] = useState(false);

  return (
    <>
      <h1 className="text-xl font-semibold mt- mb-2">Add ID Configuration</h1>
      <div className="bg-[#F6FBF8] p-3 pb-4 rounded-lg">
        <h1 className="text-lg">Prefix / Postfix</h1>
        <div className="mt-3 flex items-center gap-5">
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setIsPrefixChecked((prev) => !prev)}
              className="relative cursor-pointer w-5 h-5 rounded-full bg-white outline outline-[#47BA82]"
            >
              <Check
                size={17}
                className={`absolute top-[3px] left-[2px] text-[#47BA82] transition-all duration-300 ${
                  isPrefixChecked ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <label htmlFor="prefiix" className="text-gray-600">
              {" "}
              Prefix
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setIsPostfixChecked((prev) => !prev)}
              className="relative cursor-pointer w-5 h-5 rounded-full bg-white outline outline-[#47BA82]"
            >
              <Check
                size={17}
                className={`absolute top-[3px] left-[2px] text-[#47BA82] transition-all duration-300 ${
                  isPostfixChecked ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <label htmlFor="prefiix" className="text-gray-600">
              {" "}
              Prefix
            </label>
          </div>
        </div>

        {/* inputs */}
        <div className="w-[100%] flex items-center gap-[4%] mt-3">
          <div className="w-[48%]">
            <label htmlFor="fullId" className="mb-2 block">
              Full Id
            </label>
            <input
              type="text"
              placeholder="Enter full ID"
              className="rounded outline bg-white outline-gray-200 px-3 py-2 w-full"
            />
          </div>
          <div className="w-[48%] flex items-center gap-[4%]">
            <div className="w-[48%]">
              <label htmlFor="fullId" className="mb-2 block">
                Suffix
              </label>
              <input
                placeholder="#DC"
                type="text"
                className="rounded outline bg-white outline-gray-200 px-3 py-2 w-full"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="fullId" className="mb-2 block">
                Net value
              </label>
              <input
                placeholder="#DC"
                type="text"
                className="rounded outline bg-white outline-gray-200 px-3 py-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end   gap-3 mt-1">
        <div className="cursor-pointer transition-all duration-300  w-40 h-10 flex justify-center items-center bg-white text-[#47BA82] hover:text-white outline outline-[#47BA82] rounded  hover:bg-[#47BA82]/90">
          Clear
        </div>
        <div className="cursor-pointer transition-all duration-300  w-40 h-10 flex justify-center items-center bg-[#47BA82] rounded text-white hover:bg-[#47BA82]/90">
          Save
        </div>
      </div>
    </>
  );
};

export default IdConfigurationInput;
