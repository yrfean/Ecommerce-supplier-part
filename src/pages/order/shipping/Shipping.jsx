import React from "react";
import { ClockArrowDown, PackageCheck } from "lucide-react";
import OrdersTable from "../components/OrdersTable";

const boxShippingDetails = [
  {
    Icon: ClockArrowDown,
    iconBg: "text-[#3BC288]",
    qBg: "bg-[#3BC288]",
    title: "Pending",
    q: 14,
    bg: "bg-[#F4FFFA]",
    outline: "outline outline-[#47BA82C7]",
  },
  {
    Icon: PackageCheck,
    iconBg: "text-[#88A4FF]",
    qBg: "bg-[#88A4FF]",
    title: "Delivered",
    q: 11,
    bg: "bg-[#EEF4FF]",
    outline: "outline outline-[#88A4FFD4]",
  },
];

const titles = [
  "SI.NO",
  "Order ID",
  "Shipment ID",
  "Product Name",
  "Category",
  "Shipping Date",
  "Status",
];

const shippingsDetails = [
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
  [
    "01",
    "ID 5678",
    "ID 9876",
    "Demo name",
    "Category",
    "19/12/3003",
    "Pending",
  ],
];

const Shipping = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mb-5">Shipping Management</h1>

      {/* boxes */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {boxShippingDetails.map((box) => (
          <div
            className={`${box.bg} ${box.outline} h-[80px] font-semibold p-3 rounded-lg flex justify-evenly items-center gap-4`}
          >
            <box.Icon className={`${box.iconBg} size-8`} />
            <p className="text-lg">{box.title}</p>
            <div
              className={`aspect-square flex justify-center items-center text-white text-center min-w-11 rounded-full ${box.qBg}`}
            >
              <p>{box.q}</p>
            </div>
          </div>
        ))}
      </div>

        <h1 className="text-xl font-semibold mt-5">Shipping Schedules</h1>

      {/* table */}
      <div className="mt-3">
        <OrdersTable
          ordersDetails={shippingsDetails}
          titles={titles}
          trueOrFalse={false}
        />
      </div>
    </div>
  );
};

export default Shipping;
