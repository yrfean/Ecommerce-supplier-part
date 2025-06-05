import { useEffect, useRef } from "react";
import Button from "../../../login and signup pages/components/ButtonNoIcon";
import UserDetailsInput from "./components/UserDetailsInput";

const Security = ({ isEditable }) => {
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
        <div className="pr-2 gap-[4%] space-y-1 h-[250px] overflow-auto ">
          {/* Tax details */}
          <div>
            <h1 className="">Tax Details</h1>
            <div className="w-[50%] ">
              <UserDetailsInput
                ref={firstInputRef}
                isEditable={isEditable}
                label={"Room/Floor/Building Number"}
                value={"Akshaya Nagar, 1st Block 1st"}
              />
            </div>
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
          <div></div>
          {isEditable ? (
            <div className="flex justify-end">
              <div className="w-40 mt-">
                <Button value={"Save"} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Security;
