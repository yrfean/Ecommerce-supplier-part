import CategoryPerfomanceChart from "./Components/CategoryPerfomanceChart";
import PerfomanceChart from "./Components/PerfomanceChart";
import TopSellingItems from "./Components/TopSellingItems";

const SalesSummery = () => {
  return (
    <div className="p-3 h-full overflow-y-auto custom-scrollbar">
      <h1 className="text-2xl font-semibold mb-3">Sales Summery</h1>

      <div className="w-full flex gap-[4%] mb-4">
        {/* category perfomance chart */}
        <div className="w-[48%] h-[260px] bg-[#F8F8F8] rounded-lg shadow">
          <CategoryPerfomanceChart />
        </div>
        {/* top selling items */}
        <div className="w-[48%] h-[260px] bg-[#F8F8F8] rounded-lg shadow">
          <TopSellingItems />
        </div>
      </div>
      {/* perfomance chart */}
      <div className="rounded-lg w-full h-[380px]">
        <PerfomanceChart />
      </div>
    </div>
  );
};

export default SalesSummery;
