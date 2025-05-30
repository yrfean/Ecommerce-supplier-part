import { ArrowDownZA, Funnel, Search } from "lucide-react";
import FilterOrSorting from "../../components/FilterOrSorting";
import { useEffect, useState } from "react";

const titles = [
  "Image",
  "Name",
  "User Name",
  "User ID",
  "Position",
  "Last Login",
  "Status",
];

const user_details = [
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
  {
    img: "/1f97c2b126afc0cc179294ca7e29f74c.jpg",
    name: "Demo name",
    userName: "user2343",
    userId: "424389",
    position: "Manager",
    lastLogin: "28/Jan,7:00pm",
  },
];

const userRole = () => {
  const [onUsers, setOnUsers] = useState([]);
  const [userEditOrDelete, setUserEditOrDelete] = useState(null);

  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mb-3">User List</h1>

      {/* filtering,sortinggg,searhcing,pagination.... */}
      <div className="bg-[#F8F8F8] w-full rounded-lg p-2 h-[60px] flex justify-between">
        {/* filter  and sorting*/}
        <div className="flex gap-3">
          {/* filter */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={Funnel}
              options={["Option 1", "Option 2"]}
              placeholder={"Filter"}
            />
          </div>
          {/* sorting */}
          <div className="w-[140px]">
            <FilterOrSorting
              icon={ArrowDownZA}
              options={["Option 1", "Option 2"]}
              placeholder={"Sorting"}
            />
          </div>
        </div>
        {/* seaching,pagin */}
        <div className="flex gap-3">
          {/* search */}
          <div className="relative">
            <input
              type="text"
              name=""
              placeholder="Search product here..."
              className="bg-white rounded-lg h-[45px] font-semibold px-3 pl-8 outline-none"
            />
            <Search className="absolute w-5 h-5 text-gray-500 top-[12px] left-[8px]" />
          </div>
          {/* pagination buttons */}
          <div className="space-x-2">
            <button
              onClick={() => {
                alert("Blame backend for not making pagination");
              }}
              className="h-full w-[105px] rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 bg-white px-2 text-gray-500 font-semibold "
            >
              {"<< Previous"}
            </button>
            <button className="h-full w-[50px] rounded-lg cursor-pointer bg-white px-2  font-semibold ">
              01
            </button>
            <button
              onClick={() => {
                alert("Blame backend for not making pagination");
              }}
              className="h-full hover:bg-[#3DA372] transition-all duration-300 w-[105px] rounded-lg cursor-pointer bg-[#47BA82] px-2 text-white font-semibold "
            >
              {"Next >>"}
            </button>
          </div>
        </div>
      </div>
      {/* user list */}
      <div className="h-[450px] overflow-auto custom-overflow mt-3">
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

          <tbody className="mt-4">
            {user_details?.map((user, index) => (
              <tr
                key={index}
                className={`text-black text-center cursor-pointer bg-[#F8F8F8] rounded-lg overflow-hidden`}
              >
                <td className="px-4 py-2">
                  <img
                    src={user.img}
                    alt=""
                    className="w-10 h-10 ml-8 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2 max-h-30 overflow-hidden">
                  <div className="line-clamp-1">{user.name}</div>
                </td>
                <td className="px-4 py-2 text-sm">{user.userName}</td>
                <td className="px-4 py-2 text-sm">{user.userId}</td>
                <td className="px-4 py-2">{user.position}</td>
                <td className="px-4 py-2">{user.lastLogin}</td>

                <td>
                  <div className="flex items-center justify-center gap-3">
                    <div
                      onClick={() => {
                        setOnUsers((prev) =>
                          prev.includes(index)
                            ? prev.filter((i) => i !== index) // remove if already on
                            : [...prev, index]
                        );
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
                      onClick={() => setUserEditOrDelete(index)}
                      className="space-y-1"
                    >
                      <div className="rounded-full w-1 h-1 bg-black" />
                      <div className="rounded-full w-1 h-1 bg-black" />
                      <div className="rounded-full w-1 h-1 bg-black" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default userRole;
