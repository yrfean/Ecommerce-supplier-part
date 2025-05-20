import { ChevronDown, Star } from "lucide-react";
import Boxes from "./components/Boxes";
import Graph from "./components/Graph";
import { useGetBusinnesInsights, useGetOrderPickup } from "../../Query/Muatate";
import { useEffect, useState } from "react";
import React from "react";

const Dashboard = () => {
  const MEDIA_URL = import.meta.env.VITE_MEDIA_URL;

  const { data } = useGetOrderPickup();
  const [isDown, setIsDown] = useState(false);
  const [goDown, setGoDown] = useState(false);

  useEffect(() => {
    if (isDown !== "") {
      const goDown = setTimeout(() => {
        setGoDown(true);
      }, 300);
    }
    setGoDown(goDown);
  }, [isDown]);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <div className="p-3">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* boxes */}
      <div className="mt-8">
        <Boxes />
      </div>

      {/* chart and most selling pro */}
      <div className="bg-[#F8F8F8] flex gap-4 p-3 py-4 rounded-lg mt-3">
        {/* chart */}
        <div className="p-3 h-fit bg-white rounded-lg">
          <Graph />
        </div>
        {/* products */}
        <div className="bg-white h-[373px] rounded-lg w-[480px] p-2 overflow-scroll custom-scrollbar">
          <h1 className="mb-2 text-xl font-semibold">Order Pickup</h1>
          {data?.data.map((p, index) => (
            <React.Fragment key={index}>
              <div className="bg-[#F8F8F8] rounded-lg px-3 py-2 shadow mb-2">
                <div className="gap-3  relative flex items-center cursor-pointer">
                  {/* img */}
                  <div className="">
                    <img
                      src={`${MEDIA_URL}/${p.product_image1}`}
                      alt="image of product"
                      className="w-[110px] h-[110px] rounded-lg object-cover"
                    />
                  </div>
                  {/* details button */}
                  <div className="absolute -right-[4px] -top-[3px]">
                    <div
                      onClick={() => {
                        if (isDown === index) {
                          setIsDown("");
                        } else {
                          setIsDown(index);
                        }
                      }}
                      className="flex items-center bg-white rounded-lg w-full justify-between px-2 py-1 h-full cursor-pointer text-center"
                    >
                      <p className="font-semibold text-gray-600">Details</p>
                      <ChevronDown
                        className={`transition-transform duration-300 text-gray-600 ${
                          isDown === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  {/* pro detail */}
                  <div className="">
                    <p className="text-gray-600 font-semibold tracking-wide">#{p.order_id}</p>
                    <p className="text-gray-400 text-sm">Retailer Phone no:</p>
                    <p className="text-gray-800 font-semibold -mt-[3px]">
                      {" "}
                      {p.wholesaler_order.customer_mobile_number}
                    </p>
                    <h1 className="text-lg">{p.name}</h1>
                    <div className="flex gap-2 items-center mt-2">
                      <div className="bg-[#47BA82] flex items-center h-fit rounded-lg px-3 py-1 font-semibold text-center text-white">
                        Pickup
                      </div>
                      <div className="">
                        <p className="text-gray-400 text-sm">Expect Time</p>
                        <p className="-mt-1 text-sm">{p.shipping_date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {isDown === index && goDown ? (
                  <div
                    className={`
                    overflow-hidden transition-all duration-300 
                    ${
                      isDown === index && goDown
                        ? "max-h-40 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }
                  `}
                  >
                    <div className="p-2 bg-white rounded-lg">
                      <div className="grid grid-cols-3 gap-4 w-full text-center">
                        <p className="font-semibold">Unit</p>
                        <p className="font-semibold">Packets</p>
                        <p className="font-semibold">Price</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 w-full text-center">
                        <p className="truncate">
                          {
                            p.wholesaler_order.wholesaler_order_items[0]
                              .unit_quantity
                          }{" "}
                          {
                            p.wholesaler_order.wholesaler_order_items[0]
                              .unit_name
                          }
                        </p>
                        <p className="truncate">
                          {p.wholesaler_order.wholesaler_order_items[0].packets}
                        </p>
                        <p className="truncate">
                          {
                            p.wholesaler_order.wholesaler_order_items[0]
                              .selling_price
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
