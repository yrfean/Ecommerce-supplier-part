import { ArrowDownZA, Delete, Edit, Funnel, Plus, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import FilterOrSorting from "../../../components/FilterOrSorting";

import Button from "./../../../login and signup pages/components/ButtonNoIcon";
import AddManagerRole from "./component/AddManagerRole";

const user_details = [
  { roleName: "Admin", managerRole: "Admin" },
  { roleName: "Admin", managerRole: "Admin" },
  { roleName: "Admin", managerRole: "Admin" },
  { roleName: "Admin", managerRole: "Admin" },
  { roleName: "Admin", managerRole: "Admin" },
  { roleName: "Admin", managerRole: "Admin" },
  { roleName: "Admin", managerRole: "Admin" },
];

const titles = ["SI.No", "Role Name", "Manager Role", "Status"];

const RoleManagement = () => {
  const [onUsers, setOnUsers] = useState([]);
  const [userEditOrDelete, setUserEditOrDelete] = useState(null);
  const editMenuRef = useRef(null);
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (editMenuRef.current && !editMenuRef.current.contains(e.target)) {
        setUserEditOrDelete(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="p-3">
      <div
        onClick={() => {
          setShowAddRoleModal(false);
        }}
        className={`fixed z-100 translation-all ease-in-out duration-500 bg-black/30 inset-0 ${
          showAddRoleModal ? "" : "hidden"
        }`}
      />
      <div
        className={`fixed z-1000 transition-all duration-300 ${
          showAddRoleModal
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-0 left-1/2 -translate-x-1/2 -translate-y-full"
        }`}
      >
        <AddManagerRole />
      </div>

      <h1 className="text-2xl font-semibold">Role Management</h1>
      {/* Pagination and filter */}
      <div className="bg-[#F8F8F8] w-full rounded-lg p-2 h-[60px] flex justify-between mt-5 mb-4">
        {/* filter  and sorting*/}
        <div className="flex gap-3">
          {/* filter */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={Funnel}
              options={[["Monday"], ["Sunday"]]}
              placeholder={"Filter"}
            />
          </div>
          {/* sorting */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={ArrowDownZA}
              options={[["Monday"], ["Sunday"]]}
              placeholder={"Sorting"}
            />
          </div>
        </div>

        {/* search */}
        <div className="relative">
          <input
            type="text"
            name=""
            placeholder="Search here..."
            className="bg-white rounded-lg h-[45px] font-semibold px-3 pl-8 outline-none"
          />
          <Search className="absolute w-5 h-5 text-gray-500 top-[12px] left-[8px]" />
        </div>
      </div>

      {/* table */}
      <div className="h-[380px] overflow-auto custom-overflow mt-3">
        <table className="w-full border-separate table-fixed border-spacing-y-[5.5px]">
          <thead className="sticky top-1 z-10">
            <tr className="bg-[#354A5F] text-white rounded-lg">
              {titles.map((t, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 ${
                    index === 0
                      ? "rounded-tl-lg"
                      : index === titles.length - 1
                      ? "rounded-tr-lg"
                      : ""
                  }`}
                >
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <div className=""></div>
          <tbody className="mt-4">
            {user_details?.map((user, index) => (
              <tr
                onClick={() => {
                  if (clickedUser === index) {
                    setClickeduser(null);
                  } else {
                    setClickeduser(index + 1);
                  }
                }}
                key={index}
                className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
              >
                <td className="px-4 py-2 max-h-30 overflow-hidden">
                  <div className="line-clamp-1">{index + 1}</div>
                </td>
                <td className="px-4 py-4 text-sm">{user.roleName}</td>
                <td className="px-4 py-2 text-sm">{user.managerRole}</td>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <div
                      onClick={(e) => {
                        setOnUsers((prev) =>
                          prev.includes(index)
                            ? prev.filter((i) => i !== index) // remove if already on
                            : [...prev, index]
                        );
                        e.stopPropagation();
                      }}
                      className="w-[60px] h-[30px] p-[0.5px] rounded-full bg-white shadow cursor-pointer"
                    >
                      <div
                        className={`h-full w-[50%] rounded-full transition-all duration-300 ${
                          onUsers.includes(index)
                            ? "bg-[#47BA82] translate-x-[30px]"
                            : "bg-[#C2C2C2]"
                        }`}
                      />
                    </div>
                    <div
                      onClick={(e) => {
                        if (userEditOrDelete === index) {
                          setUserEditOrDelete(null);
                        } else {
                          setUserEditOrDelete(index);
                        }
                        e.stopPropagation();
                      }}
                      className="space-y-1 relative"
                    >
                      <div className="rounded-full w-1 h-1 bg-black" />
                      <div className="rounded-full w-1 h-1 bg-black" />
                      <div className="rounded-full w-1 h-1 bg-black" />
                      {/* Edit menu */}
                      {userEditOrDelete === index ? (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          ref={editMenuRef}
                          className={`absolute z-50  space-y-1 shadow w-[150px] p-2 bg-white  ${
                            index === user_details.length - 1
                              ? "bottom-0 right-1 rounded-bl-lg rounded-tr-lg rounded-tl-2xl"
                              : "top-1 right-1 rounded-tl-lg rounded-br-lg rounded-bl-2xl"
                          }`}
                        >
                          <div className="flex gap-2 items-center hover:bg-gray-100 rounded-lg p-1">
                            <Edit size={20} className="text-[#354A5F]" />
                            <p className="text-[#354A5F]">Edit</p>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-gray-100 rounded-lg p-1">
                            <Delete size={20} className="text-red-500" />
                            <p className="text-red-500">Delete</p>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-gray-100 rounded-lg p-1">
                            <Plus size={20} className="text-[#47BA82]" />
                            <p className="text-[#47BA82]">Add Module</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* btn */}
      <div className="w-full flex mt-3 justify-end items-end">
        <div className="w-[150px]">
          <div onClick={() => setShowAddRoleModal(true)}>
            <Button value={"Add Role"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
