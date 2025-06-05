import {
  CirclePercent,
  CreditCard,
  Edit,
  Mail,
  NotebookPen,
  Pen,
  Phone,
  Tag,
  Truck,
} from "lucide-react";

const cards = [
  { name: "Payments", icon: CreditCard },
  { name: "Offer Edit ", icon: Tag },
  { name: "Return Management", icon: Truck },
  { name: "Order Management", icon: NotebookPen },
  { name: "Sales", icon: CirclePercent },
];

const UserModal = () => {
  return (
    <div className="w-[450px] h-[610px] bg-white rounded-2xl p-3">
      <h1 className="font-semibold text-xl mb-3">User Details</h1>

      <div className="flex w-full justify-between px-1 items-center">
        <p className="text-sm ">Created By: Admin</p>
        <Edit size={17} className="text-[#47BA82] cursor-pointer" />
      </div>

      {/* user details */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* image */}
        <div>
          <img
            src="/user2.avif"
            alt="user dp"
            className="outline-3 outline-[#47BA82] object-cover rounded-full w-30 h-30 mt-4"
          />
        </div>

        <h1 className="text-xl mt-2 font-medium">Richardson Davis</h1>
        <p className="text-gray-500">Admin</p>
        <div className="flex justify-center items-center gap-5 ml-6 mt-3">
          <div className="flex items-center gap-">
            <Phone size={15} className="mt-1" />
            <p className="text-sm">+91 7736842013</p>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={15} className="mt-1" />
            <p className="text-sm">abc123@gmail.com</p>
          </div>
        </div>
        <p className="text-sm mt-1 text-gray-600">Created Date: 00/00/0000</p>
      </div>
      {/* user modules */}
      <h1 className="font-semibold mb-4 mt-5">User Modules</h1>
      {/* cards */}
      <div className="grid grid-cols-3 gap-3">
        {cards.map((card) => {
          return (
            <div className="outline px-2 outline-[#47BA82] bg-[#F4FCF8] rounded-lg flex flex-col items-center justify-center gap-1 h-[90px]">
              <card.icon size={25} className="text-[#47BA82]" />
              <p className="text-[#47BA82] text-sm text-wrap text-center">
                {" "}
                {card.name}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserModal;
