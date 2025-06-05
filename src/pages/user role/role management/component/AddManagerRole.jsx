import React, { useState } from "react";
import Button from "../../../../login and signup pages/components/ButtonNoIcon";
import { ChevronDown } from "lucide-react";

const roles = ["Admin", "Admin", "Admin"];

const AddManagerRole = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [isDown, setIsDown] = useState(false);

  return (
    <div className="w-[400px] h-[325px] bg-white rounded-2xl p-3 pt-6">
      <h1 className="text-xl font-semibold">Add New Role</h1>

      <div className="bg-[#F4F4F4] p-3 py-5 rounded-lg mt-5">
        <label htmlFor="new_role" className="block">
          New Role
        </label>
        <input
          type="text"
          placeholder="Enter new role"
          className="px-3 py-2 w-full bg-white rounded outline outline-gray-200"
        />
        <label className="block font-medium">Role</label>

        <div className={`relative  bg-white h-full rounded-lg `}>
          <div
            onClick={() => setIsDown((prev) => !prev)}
            className="flex items-center w-full justify-between px-4 h-full cursor-pointer outline outline-gray-200 rounded"
          >
            <p
              className={`w-full truncate py-2 
          text-gray-500 
      }`}
            >
              {selectedRoles.length > 0 ? "Roles Selected" : "Choose Role"}
            </p>
            <ChevronDown
              className={`transition-transform text-gray-500 ${
                isDown ? "rotate-180" : ""
              }`}
            />
          </div>
          {isDown && (
            <div
              className={`absolute p-1 bottom-full overflow-x-hidden custom-scrollbar overflow-y-scroll left-0 w-full bg-white shadow-md z-10`}
            >
              {roles.map((opt, index) => {
                return (
                  <div
                    key={index}
                    className="flex mt-1 items-center justify-center gap-5 py-1 outline outline-gray-200 rounded"
                  >
                    <label htmlFor="" className="block w-16">
                      {opt}
                    </label>
                    <input
                      checked={selectedRoles.includes(opt)}
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRoles((prev) => [...prev, opt]);
                        } else {
                          setSelectedRoles((prev) =>
                            prev.filter((role) => role === opt)
                          );
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Button value={"Done"} />
      </div>
    </div>
  );
};

export default AddManagerRole;
