import { Star } from "lucide-react";
import Boxes from "./components/Boxes";
import Graph from "./components/Graph";

const products = [
  {
    name: "Spanish chair",
    image: "/872321ed52fee839cde254080f1eaee494dccbd3.png",
    brandName: "Gucci",
    cutPrice: "$230",
    price: "$230",
    rating: "2.3",
  },
  {
    name: "Modern Sofa",
    image: "/872321ed52fee839cde254080f1eaee494dccbd3.png",
    brandName: "Ikea",
    cutPrice: "$500",
    price: "$450",
    rating: "4.5",
  },
  {
    name: "Wooden Table",
    image: "/872321ed52fee839cde254080f1eaee494dccbd3.png",
    brandName: "Ashley",
    cutPrice: "$300",
    price: "$280",
    rating: "4.0",
  },
  {
    name: "Leather Recliner",
    image: "/872321ed52fee839cde254080f1eaee494dccbd3.png",
    brandName: "La-Z-Boy",
    cutPrice: "$700",
    price: "$650",
    rating: "4.8",
  },
  {
    name: "Dining Set",
    image: "/872321ed52fee839cde254080f1eaee494dccbd3.png",
    brandName: "Wayfair",
    cutPrice: "$1200",
    price: "$1100",
    rating: "4.6",
  },
  {
    name: "Office Chair",
    image: "/872321ed52fee839cde254080f1eaee494dccbd3.png",
    brandName: "Herman Miller",
    cutPrice: "$900",
    price: "$850",
    rating: "4.9",
  },
  {
    name: "Bed Frame",
    image: "/872321ed52fee839cde254080f1eaee494dccbd3.png",
    brandName: "Zinus",
    cutPrice: "$400",
    price: "$350",
    rating: "4.2",
  },
];

const Dashboard = () => {
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
        <div className="bg-white h-[373px] rounded-lg w-[330px] p-2 overflow-scroll custom-scrollbar">
          <h1 className="mb-3 text-xl font-semibold">Most selling products</h1>
          {products.map((p) => (
            <div className="gap-3 flex items-center px-2 py-1 cursor-pointer mb-1 rounded-lg bg-[#F8F8F8]">
              {/* img */}
              <div className="relative">
                <img
                  src={p.image}
                  alt="image of product"
                  className="w-[80px] h-[60px] rounded-lg object-cover"
                />
                {/* rating */}
                <div className="absolute items-center px-1 rounded bg-[#47BA82] top-[5px] flex gap-1 right-[5px]">
                  <Star className="text-yellow-500 w-3 h-3" />
                  <p className="text-white text-sm">{p.rating}</p>
                </div>
              </div>
              {/* pro detail */}
              <div className="">
                <h1 className="text-lg">{p.name}</h1>
                <p className="text-gray-700">{p.brandName}</p>
                {/* pricing */}
                <div className="flex gap-2">
                  <p className="text-gray-500 line-through">{p.cutPrice}</p>
                  <p className="text-[#47BA82] font-semibold">{p.cutPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
