import {
  BadgePercent,
  CreditCard,
  NotepadTextDashed,
  ShoppingBasket,
  TicketPercent,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";

const moduleDetails = [
  { name: "Order Management", icon: NotepadTextDashed },
  { name: "Sales", icon: BadgePercent },
  { name: "Product", icon: ShoppingBasket },
  { name: "Payments", icon: CreditCard },
  { name: "Offer Edit", icon: TicketPercent },
  { name: "Return Management", icon: Truck },
];

const AddUser2 = ({ setPageNumber }) => {
  const [choseModules, setChoseModules] = useState([]);

  useEffect(() => {
    if (choseModules.length > 0) console.log(choseModules);
  }, [choseModules]);

  return (
    <>
      <div className="bg-[#F6FBF8] rounded-lg w-full h-[395px] p-3 overflow-y-auto custom-scrollbar">
        <h1 className="font-semibold text-xl">User Modules</h1>

        <p className="text-gray-500 mb-10">Choose user modules</p>

        <div className="grid grid-cols-4 gap-13 px-10">
          {moduleDetails.map((card) => {
            return (
              <div
                key={card.name}
                onClick={() => {
                  setChoseModules((prev) => {
                    return prev.includes(card.name)
                      ? prev.filter((moduleName) => moduleName !== card.name)
                      : [...prev, card.name];
                  });
                }}
                className={`outline cursor-pointer p-3 px-2 outline-[#47BA82] transition-all duration-300  rounded-lg flex flex-col items-center justify-center gap-1 h-[100px] ${
                  choseModules.includes(card.name)
                    ? "bg-[#47BA82] text-white"
                    : "bg-[#F4FCF8] text-[#47BA82]"
                }`}
              >
                <card.icon size={35} className="text-[#47BA82" />
                <p className=" text- text-wrap text-center"> {card.name} </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full h-[60px] items-end justify-end gap-3 pr-10">
        <button
          onClick={() => setPageNumber(1)}
          type="button"
          className="w-[130px] transition-all duration-300 shadow font-bold tracking-wider text-white rounded-lg h-[40px] cursor-pointer text-center bg-[#47BA82] hover:bg-[#3DA372]"
        >
          Back
        </button>
        <button
          onClick={() => setPageNumber(3)}
          type="button"
          className="w-[130px] transition-all duration-300 shadow font-bold tracking-wider text-white rounded-lg h-[40px] cursor-pointer text-center bg-[#47BA82] hover:bg-[#3DA372]"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AddUser2;
