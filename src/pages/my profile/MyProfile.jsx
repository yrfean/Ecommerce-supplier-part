import { useState } from "react";
import PersonalDetails from "./pages/PersonalDetails";
import Company from "./pages/Company";
import Security from "./pages/Security";
import { Building2, Edit, Mail, Phone, X } from "lucide-react";

const MyProfile = () => {
  const [page, setPage] = useState("security");
  const [isEditable, setISEditable] = useState(false);

  return (
    <div>
      <h1 className="text-2xl my-2 font-semibold">
        {page === "personalDetails"
          ? "Personal Details"
          : page === "company"
          ? "Company"
          : "Security"}
      </h1>

      {/* navbar */}
      <div className="w-full h-[70px] bg-[#F8F8F8] pr-10 rounded-lg flex justify-between items-center">
        <div className="w-2/3 flex items-center ml-6 gap-3 font-semibold">
          <div
            onClick={() => setPage("personalDetails")}
            className={`cursor-pointer w-[130px] h-[40px] transition-all duration-300 flex justify-center items-center ${
              page === "personalDetails"
                ? "bg-white  shadow text-center rounded-lg "
                : "text-gray-400"
            }`}
          >
            Personl Details
          </div>

          <div
            onClick={() => setPage("company")}
            className={`cursor-pointer w-[130px] h-[40px] flex justify-center items-center transition-all duration-300 ${
              page === "company"
                ? "bg-white  shadow text-center rounded-lg "
                : "text-gray-400"
            }`}
          >
            Company
          </div>
          <div
            onClick={() => setPage("security")}
            className={`cursor-pointer w-[130px] h-[40px] flex justify-center items-center ${
              page === "security"
                ? "bg-white transition-all duration-300  shadow text-center rounded-lg "
                : "text-gray-400"
            }`}
          >
            Security
          </div>
        </div>
      </div>

      <div className="bg-[#F1F1F1] mt-2 rounded-lg p-3">
        {/* dp,name and supplier */}
        <div className="flex items-center gap-3 ml-5">
          <div className="shadow-lg shadow-[#47BA82]/30 w-fit h-fit rounded-full bg-white p-1">
            <img
              src="/user2.avif"
              alt="user dp"
              className="w-[120px] h-[120px]  object-cover rounded-full outline-3 outline-[#47BA82]"
            />
          </div>
          <div>
            <h1 className="font-semibold text-xl">Hermione Granger</h1>
            <p className="text-sm">Supplier </p>
          </div>
        </div>
        {/* company name ,number ,email */}
        <div className="flex justify-between mx-7 mt-2">
          <div className="flex items-center gap-6">
            <div className="flex gap-2 text-sm items-center">
              <Building2 size={16} />
              <p>Company name</p>
            </div>
            <div className="flex gap-2 text-sm items-center">
              <Phone size={16} />
              <p>+121 843902284</p>
            </div>
            <div className="flex gap-2 text-sm items-center">
              <Mail size={16} />
              <p>Company@gmail.com</p>
            </div>
          </div>
          {page === "security" ? null : isEditable ? (
            <X
              size={20}
              onClick={() => setISEditable(false)}
              className="text-[#47BA82] cursor-pointer"
            />
          ) : (
            <Edit
              onClick={() => setISEditable(true)}
              size={18}
              className="text-[#47BA82] cursor-pointer"
            />
          )}
        </div>
        {/* line */}
        <div className="h-[1.2px]  my-2 bg-gray-300" />

        {/*comp */}
        <div className="w-full h-[260px] rounded-lg p-3 mt-1">
          {page === "personalDetails" ? (
            <div>
              <PersonalDetails isEditable={isEditable} />
            </div>
          ) : page === "company" ? (
            <div>
              <Company isEditable={isEditable} />{" "}
            </div>
          ) : (
            <div>
              {" "}
              <Security isEditable={isEditable} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
