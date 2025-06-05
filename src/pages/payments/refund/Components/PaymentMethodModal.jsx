import { Icon } from "@iconify/react/dist/iconify.js";
import { BookmarkIcon, Landmark } from "lucide-react";

const methods = [
  { icon: "logos:google-pay", name: "Gpay", fontSize: "15" },
  {
    icon: "simple-icons:phonepe",
    color: "#5F259F",
    name: "Phone Pay",
    fontSize: "22",
  },
  {
    icon: "simple-icons:paytm",
    color: "#20336B",
    name: "Paytm",
    fontSize: "28",
  },
];

const PaymentMethodModal = ({ setPaymentMethod }) => {
  return (
    <div className="bg-white w-[400px] h-[388px] rounded-t-2xl shadow p-3">
      <h1 className="text-2xl font-medium mb-2">Other Payments</h1>

      <h2 className="text-xl mb-2">Account</h2>
      <div
        onClick={() => setPaymentMethod("bankTransfer")}
        className="w-full bg-[#F5F5F5] rounded-lg h-12 cursor-pointer flex items-center justify-between px-4"
      >
        <div className="flex gap-3">
          <Landmark />
          <p className="font-medium">Bank Transfer</p>
        </div>
      </div>

      <h2 className="text-xl mt-3 mb-2">Online Payments</h2>
      {methods.map((method) => (
        <div className="w-full bg-[#F5F5F5] mb-2 rounded-lg h-12 cursor-pointer flex items-center justify-between px-4">
          <div className="flex gap-3 items-center">
            <Icon
              className="w-[50px]"
              icon={method.icon}
              color={method.color}
              fontSize={method.fontSize}
            />
            <p className="font-medium">{method.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethodModal;
