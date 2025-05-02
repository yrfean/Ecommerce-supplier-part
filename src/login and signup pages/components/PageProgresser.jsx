import { useEffect, useState } from "react";
import {
  CircleUser,
  MapPin,
  ReceiptText,
  Landmark,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageProgresser = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(false);
  useEffect(() => {
    const path = window.location.pathname;
    setPage(path.slice(1));
  }, [window.location]);

  return (
    <div className="my-3 flex w-full gap-3 justify-center items-center text-[#E7E7E7]">
      <div
        onClick={() => navigate(-1)}
        className="text-gray-500 cursor-pointer"
      >
        <ArrowLeft />
      </div>
      {/* supplier details */}
      <div
        className={`${
          page === "supplierdetails"
            ? "bg-[#47BA82] pr-3 p-1 flex gap-3 justify-between items-center rounded-full"
            : ""
        }`}
      >
        <div
          className={`${
            page === "supplierdetails"
              ? "p-1 bg-white rounded-full"
              : "outline-2 outline-[#47BA82] rounded-full p-1"
          }`}
        >
          <CircleUser
            className={`w-6 h-6 rounded-full ${
              page === "supplierdetails" ? "text-[#47BA82]" : "text-[#47BA82]"
            }`}
          />
        </div>

        {page === "supplierdetails" ? (
          <div>
            <h1 className="text-white text-[11px]">STEP-1</h1>
            <p className="text-white text-[10px] text-nowrap">
              Supplier details
            </p>
          </div>
        ) : null}
      </div>
      {/* line */}
      <div className="relative">
        <div
          className={`bg-[#47BA82] absolute h-1 rounded ${
            page === "supplierdetails" ? "w-[35px]" : "w-[70px]"
          }`}
        />
        <div
          className={`w-[70px] bg-[#E7E7E7] h-1 rounded ${
            page === "supplierdetails" ? "" : ""
          }`}
        />
      </div>
      {/* Pickup adress */}
      <div
        className={`${
          page === "pickupaddress"
            ? "bg-[#47BA82] pr-3 p-1 flex gap-3 justify-between items-center rounded-full"
            : ""
        }`}
      >
        <div
          className={`${
            page === "pickupaddress"
              ? "p-1 bg-white rounded-full"
              : page === "taxdetails"
              ? "outline-2 outline-[#47BA82] p-1 rounded-full"
              : page === "bankdetails"
              ? "outline-2 outline-[#47BA82] p-1 rounded-full"
              : ""
          }`}
        >
          <MapPin
            className={`w-6 h-6 rounded-full ${
              page === "pickupaddress"
                ? "text-[#47BA82]"
                : page === "taxdetails"
                ? " text-[#47BA82]"
                : page === "bankdetails"
                ? "text-[#47BA82]"
                : ""
            }`}
          />
        </div>

        {page === "pickupaddress" ? (
          <div>
            <h1 className="text-white text-[11px]">STEP-2</h1>
            <p className="text-white text-[10px] text-nowrap">Pickup Adresss</p>
          </div>
        ) : null}
      </div>
      {/* line */}
      <div className="relative">
        <div
          className={`bg-[#47BA82] absolute h-1 rounded ${
            page === "pickupaddress"
              ? "w-[35px]"
              : page === "taxdetails"
              ? " w-[70px]"
              : page === "bankdetails"
              ? "w-[70px]"
              : ""
          }`}
        />
        <div
          className={`w-[70px] bg-[#E7E7E7] h-1 rounded ${
            page === "supplierdetails" ? "" : ""
          }`}
        />
      </div>
      {/* tax details */}
      <div
        className={`${
          page === "taxdetails"
            ? "bg-[#47BA82] pr-3 p-1 flex gap-3 justify-between items-center rounded-full"
            : ""
        }`}
      >
        <div
          className={`${
            page === "taxdetails"
              ? "p-1 bg-white rounded-full"
              : page === "bankdetails"
              ? "outline-2 outline-[#47BA82] p-1 rounded-full"
              : ""
          }`}
        >
          <ReceiptText
            className={`w-6 h-6 rounded-full ${
              page === "taxdetails"
                ? "text-[#47BA82]"
                : page === "bankdetails"
                ? "text-[#47BA82]"
                : ""
            }`}
          />
        </div>

        {page === "taxdetails" ? (
          <div>
            <h1 className="text-white text-[11px]">STEP-3</h1>
            <p className="text-white text-[10px] text-nowrap">Tax details</p>
          </div>
        ) : null}
      </div>
      {/* line */}
      <div className="relative">
        <div
          className={`bg-[#47BA82] absolute h-1 rounded ${
            page === "taxdetails"
              ? "w-[35px]"
              : page === "bankdetails"
              ? "w-[70px]"
              : "w-[0px]"
          }`}
        />
        <div
          className={`w-[70px] bg-[#E7E7E7] h-1 rounded ${
            page === "taxdetails" ? "" : ""
          }`}
        />
      </div>
      {/* bank details */}
      <div
        className={`${
          page === "bankdetails"
            ? "bg-[#47BA82] pr-3 p-1 flex gap-3 justify-between items-center rounded-full"
            : ""
        }`}
      >
        <div
          className={`${
            page === "bankdetails" ? "p-1 bg-white rounded-full" : ""
          }`}
        >
          <Landmark
            className={`w-6 h-6 rounded-full ${
              page === "bankdetails" ? "text-[#47BA82]" : ""
            }`}
          />
        </div>

        {page === "bankdetails" ? (
          <div>
            <h1 className="text-white text-[11px]">STEP-4</h1>
            <p className="text-white text-[10px] text-nowrap">Bank details</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PageProgresser;
