import { useEffect, useRef, useState } from "react";
import UserDetailsInput from "./components/UserDetailsInput";
import DropDown from "./../../../components/DropDown";
import Button from "./../../../login and signup pages/components/ButtonNoIcon";

const PersonalDetails = ({ isEditable }) => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isEditable) {
      firstInputRef.current.focus();
    }
  }, [isEditable]);
  return (
    <div className="">
      {/* inputs */}
      <div className="px-4">
        <div className="grid grid-cols-2 pr-2 gap-[4%] space-y-1 h-[250px] overflow-auto custom-scrollba">
          <div className="">
            <UserDetailsInput
              ref={firstInputRef}
              isEditable={isEditable}
              label={"Company Name"}
              value={"Demo Company name"}
            />
          </div>
          <UserDetailsInput
            isEditable={isEditable}
            label={"Place"}
            value={"Rathmirty nagar,Bangloore"}
          />
          {isEditable ? (
            <div>
              <label htmlFor="Category" className="block text-lg mb-1">
                Category
              </label>
              <div
                className={`h-10 outline text-gray-600 outline-gray-200 rounded-md transition-all duraton-300 ${
                  isEditable ? "shadow" : ""
                }`}
              >
                <DropDown
                  options={["Category 1", "Category 2"]}
                  placeholder={"Cloth Shop"}
                  bg={"bg-white"}
                />
              </div>
            </div>
          ) : (
            <UserDetailsInput
              isEditable={isEditable}
              label={"Category"}
              value={"Cloth Shop"}
            />
          )}
          <UserDetailsInput
            isEditable={isEditable}
            label={"State"}
            value={"Kerala"}
          />
          <UserDetailsInput
            isEditable={isEditable}
            label={"Whatsapp number"}
            value={"234323432"}
          />
          <UserDetailsInput
            isEditable={isEditable}
            label={"Disctrict"}
            value={"Kozhikode"}
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

export default PersonalDetails;
