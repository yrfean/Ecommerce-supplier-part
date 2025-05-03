import Boxes from "./components/Boxes";
import Graph from "./components/Graph";


const products = [
  { name: "Spanish chair", image:"872321ed52fee839cde254080f1eaee494dccbd3", brandName: "Gucci", cutPrice: "$230", price: "$230", rating: "2.3" },
  { name: "Modern Sofa", brandName: "Ikea", cutPrice: "$500", price: "$450", rating: "4.5" },
  { name: "Wooden Table", brandName: "Ashley", cutPrice: "$300", price: "$280", rating: "4.0" },
  { name: "Leather Recliner", brandName: "La-Z-Boy", cutPrice: "$700", price: "$650", rating: "4.8" },
  { name: "Dining Set", brandName: "Wayfair", cutPrice: "$1200", price: "$1100", rating: "4.6" },
  { name: "Office Chair", brandName: "Herman Miller", cutPrice: "$900", price: "$850", rating: "4.9" },
  { name: "Bed Frame", brandName: "Zinus", cutPrice: "$400", price: "$350", rating: "4.2" }
];

const Dashboard = () => {
  return (
    <div className="p-3">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* boxes */}
      <div className="mt-8">
        <Boxes />
      </div>

      {/* chart and most selling pro */}
      <div className="bg-[#F8F8F8] flex p-3 py-4 rounded-lg mt-3">
        {/* chart */}
        <div className="p-3 bg-white rounded-lg">
          <Graph />
        </div>
        {/* products */}
        <div>
          hai
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
