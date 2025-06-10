import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import DropDown from "../../../components/DropDown";
import { useGetBusinnesInsights } from "../../../Query/dashboard queries/DashboardApi";
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);
const CategoryPerfomanceChart = () => {
  const { data } = useGetBusinnesInsights();
  const [filter, setFilter] = useState("Weekly");

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  // Access the nested data object correctly
  const insightsData = data?.data || data;

  const values =
    filter === "Weekly" && insightsData?.weekly_insights
      ? Object.values(insightsData.weekly_insights)
      : filter === "Monthly" && insightsData?.monthly_insights
      ? Object.values(insightsData.monthly_insights)
      : [];

  const maxYValue = values.length ? Math.max(...values) : 0;

  // Fixed dynamic step size calculation
  const dynamicStepSize =
    maxYValue <= 10
      ? 1
      : maxYValue <= 50
      ? 5
      : maxYValue <= 200
      ? 10
      : maxYValue <= 1000
      ? 100
      : maxYValue <= 10000
      ? 500
      : maxYValue <= 50000 // Fixed this condition
      ? 1000
      : maxYValue <= 100000
      ? 10000
      : 20000;

  const salesData = {
    labels:
      filter === "Weekly" && insightsData?.weekly_insights
        ? Object.keys(insightsData.weekly_insights)
        : filter === "Monthly" && insightsData?.monthly_insights
        ? Object.keys(insightsData.monthly_insights)
        : [],
    datasets: [
      {
        label: "Insight",
        data: values,
        borderColor: "#47BA82",
        backgroundColor: "#FFFFFF",
        tension: 0,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 10,
        pointBackgroundColor: "rgba(100, 200, 150, 0.5)",
        pointBorderColor: "#F6FBF8",
      },
    ],
  };

  const options = {
    responsive: true,
    animations: {
      x: {
        type: "number",
        easing: "easeOutExpo",
        duration: 850,
        from: NaN,
        delay: (ctx) => ctx.index * 100,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Sales Over the Week",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max:
          maxYValue < dynamicStepSize
            ? dynamicStepSize
            : Math.ceil(maxYValue * 1.1), // Added some padding
        grid: {
          display: false,
          drawBorder: false,
          color: "#E5E7EB",
          lineWidth: 1,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
          stepSize: dynamicStepSize,
          color: "#6B7280",
          padding: 10,
          callback: function (value) {
            // Only format as 'k' if value is >= 1000
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
          color: "#6B7280",
          padding: 10,
        },
      },
    },
  };
  return (
    <div className="relative  p-3 h-full ">
      <h1 className="text-lg font-semibold mb-3">Category Perfomance Chart</h1>
      <div className="absolute right-3 top-3">
        <DropDown
          options={["Weekly", "Monthly"]}
          setValue={setFilter}
          bg={"bg-white"}
          placeholder={"Filter"}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-1 h-[170px] w-[400px] shadow bg-white items-center justify-center rounded-lg">
          <div>
            <h1 className="text-xl mb-">Category 1</h1>
            <p className="font-semibold text-2xl">23453.3</p>
          </div>
          <div style={{ width: "230px", height: "128px" }}>
            <Line key={filter} data={salesData} options={options} />
          </div>
        </div>
      </div>
      <div className="w-full h-[34px]  flex items-center justify-center gap-2">
        <div className="bg-[#47BA82] rounded-full w-2 h-2" />
        <div className="bg-[#9D9D9D] rounded-full w-2 h-2" />
        <div className="bg-[#9D9D9D] rounded-full w-2 h-2" />
      </div>
    </div>
  );
};

export default CategoryPerfomanceChart;
