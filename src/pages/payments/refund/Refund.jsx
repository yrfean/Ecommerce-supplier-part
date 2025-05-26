import { useEffect, useState } from "react";
import NormalTable from "../../../components/NormalTable";
import BankTransfer from "./Components/BankTransfer";
import { ChevronDown, CircleDollarSign } from "lucide-react";
import PaymentMethodModal from "./Components/PaymentMethodModal";

const repaymentDetails = {
  amount_to_refund: "$244",
  repayment_date: "12-22-2033",
  due_date: "12-3-2044",
};

const Refund = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showMethodModal, setShowMethodModal] = useState(false);

  useEffect(() => {
    if (paymentMethod === "bankTransfer") setShowMethodModal(false);
  }, [paymentMethod]);

  const formatkey = (key) => {
    const parts = key
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1));
    return parts.join(" ");
  };

  return (
    <div className="p-3">
      {/* method modal */}
      <div
        onClick={() => setShowMethodModal(false)}
        className={`fixed z-100 bg-black/30 inset-0 ${
          showMethodModal ? "" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed z-100 transition-all duration-300 ${
          showMethodModal ? "top-5/12 left-6/9" : "top-full left-6/9"
        }`}
      >
        <PaymentMethodModal setPaymentMethod={setPaymentMethod} />
      </div>

      {/* repayment */}
      <h1 className="text-2xl mb-3 font-medium">Repayment</h1>
      <div className="bg-[#47BA82] rounded-lg text-white w-full h-18 flex items-center justify-evenly">
        {Object.entries(repaymentDetails).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="text-xl">
                {formatkey(key)}
                <span> : </span>
                <span className="font-semibold">{value}</span>
              </p>
            </div>
          );
        })}
      </div>

      {/* product details */}
      <h1 className="text-2xl mt-3 mb-1 font-medium">Product details</h1>
      <NormalTable
        titles={[
          ["Return ID"],
          ["Product Name"],
          ["Packets"],
          ["Shipped Date"],
          ["Category"],
          ["Quantity"],
          ["Status"],
        ]}
        values={[
          [
            ["#84784"],
            ["Product Name"],
            ["5"],
            ["28/1/24"],
            ["Oil/Vineagar"],
            ["500G"],
            ["Shipped"],
          ],
        ]}
      />

      {/* Payment method */}
      <h1 className="text-2xl mt-2 mb-1 font-medium">Payment Method</h1>
      {paymentMethod === "bankTransfer" ? (
        <BankTransfer setShowMethodModal={setShowMethodModal} />
      ) : (
        <div className="w-full h-14">
          <div
            onClick={() => setShowMethodModal(true)}
            className="w-full h-full rounded-lg cursor-pointer flex items-center justify-between px-5 bg-[#F4F4F4]"
          >
            <div className="flex gap-4 items-center">
              <CircleDollarSign className="" />
              <p className="font-mediu text-lg">Select Payment</p>
            </div>
            <div>
              <ChevronDown className={`transition-all duration-300 ${""}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Refund;
