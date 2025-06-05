import React, { useEffect, useRef } from "react";
import Button from "../../../login and signup pages/components/ButtonNoIcon";
import UserDetailsInput from "./components/UserDetailsInput";
import DropDown from "../../../components/DropDown";

const Company = ({ isEditable }) => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isEditable) {
      firstInputRef.current.focus();
    }
  }, [isEditable]);
  return (
    <div className="">
      {/* inputs */}
      <div className="px-4 mt-">
        <div className="grid grid-cols-2 pr-2 gap-[4%] space-y-1 h-[250px] overflow-auto custom-scrollba">
          <div className="">
            <UserDetailsInput
              ref={firstInputRef}
              isEditable={isEditable}
              label={"Room/Floor/Building Number"}
              value={"Akshaya Nagar, 1st Block 1st"}
            />
          </div>
          <UserDetailsInput
            isEditable={isEditable}
            label={"City"}
            value={"Bangloore"}
          />
          <UserDetailsInput
            isEditable={isEditable}
            label={"Pin Code"}
            value={"473829"}
          />
          <UserDetailsInput
            isEditable={isEditable}
            label={"Landmark"}
            value={"234323432"}
          />
          <UserDetailsInput
            isEditable={isEditable}
            label={"State"}
            value={"Kerala"}
          />

          <div className="">
            <label htmlFor="address">Address</label>
            <textarea
              readOnly={!isEditable}
              value={"Vethamangalath,mukkam..."}
              className={`px-3 py-2 w-full rounded-md outline transition-all duration-300 outline-gray-200  text-gray-600 ${
                isEditable ? "shadow  bg-white font-semibold" : "bg-gray-50"
              } `}
            />
          </div>
          {isEditable ? (
            <div className="flex items-center justify-center">
              <div className="w-40 mt-7">
                <Button value={"Save"} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Company;
