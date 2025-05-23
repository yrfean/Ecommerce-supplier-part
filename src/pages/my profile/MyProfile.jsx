import { useState } from "react";
import PersonalDetails from "./pages/PersonalDetails";
import Company from "./pages/Company";
import Security from "./pages/Security"

const MyProfile = () => {
  const [page, setPage] = useState("personalDetails");

  return (
    <div>
      <h1 className="text-2xl my-2 font-semibold">
        {page === "personalDetails"
          ? "Personal Details"
          : page === "company"
          ? "Company"
          : "Security"}{" "}
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

      {/*comp */}
      <div className="w-full h-[460px] bg-[#F1F1F1] rounded-lg p-3 mt-2">
        {page === "personalDetails" ? (
          <div>
            <PersonalDetails />{" "}
          </div>
        ) : page === "company" ? (
          <div>
            <Company />{" "}
          </div>
        ) : (
          <div>
            {" "}
            <Security />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
