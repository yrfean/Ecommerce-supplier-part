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
import { useGetBusinnesInsights } from "../../../Query/Mutate";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
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
        tension: 0.4,
        fill: true,
        pointRadius: 8,
        pointHoverRadius: 10,
        pointBackgroundColor: "rgba(100, 200, 150, 0.5)",
        pointBorderColor: "#F6FBF8",
      },
    ],
  };

  const options = {
    responsive: true, // Changed to true for better responsiveness
    maintainAspectRatio: false, // Added this for better control
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
          drawBorder: false,
          color: "#E5E7EB",
          lineWidth: 1,
        },
        ticks: {
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
        ticks: {
          color: "#6B7280",
          padding: 10,
        },
      },
    },
  };

 
  if (!data) {
    return <div className="w-[500px] h-[308px]">Loading...</div>;
  }

  return (
    <div className="relative">
      <h1 className="text-xl font-semibold mb-3">Business insight</h1>
      <div className="absolute right-0 top-0">
        <DropDown
          options={["Weekly", "Monthly"]}
          setValue={setFilter}
          bg={"bg-[#F4F4F4]"}
          placeholder={"Filter"}
        />
      </div>
      <div style={{ width: "500px", height: "308px" }}>
        <Line key={filter} data={salesData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
