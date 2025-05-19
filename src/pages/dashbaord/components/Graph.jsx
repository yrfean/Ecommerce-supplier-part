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
import { useGetBusinnesInsights } from "../../../Query/Muatate";

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
  const [datas, setDatas] = useState([]);

  const values =
    filter === "Weekly" && data?.data?.weekly_insights
      ? Object.values(data.data.weekly_insights)
      : filter === "Monthly" && data?.data?.monthly_insights
      ? Object.values(data.data.monthly_insights)
      : [];
  const maxYValue = values.length ? Math.max(...values) : 0;

  const dynamicStepSize =
    maxYValue <= 10
      ? 2
      : maxYValue <= 100
      ? 10
      : maxYValue <= 1000
      ? 200
      : maxYValue <= 10000
      ? 1000
      : maxYValue <= 100000
      ? 10000
      : 20000;

  const salesData = {
    labels:
      filter === "Weekly" && data?.data?.weekly_insights
        ? Object.keys(data.data.weekly_insights)
        : filter === "Monthly" && data?.data?.monthly_insights
        ? Object.keys(data.data.monthly_insights)
        : [],
    datasets: [
      {
        label: "Insight",
        data: values,
        borderColor: " #47BA82",
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
    responsive: false,
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
        max: maxYValue < dynamicStepSize ? dynamicStepSize : maxYValue,
        ticks: {
          stepSize: dynamicStepSize,
          callback: function (value) {
            return value / 1000 + "k";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="relative">
      <h1 className="text-xl font-semibold mb-3">Business insight</h1>
      <div className="absolute right-0 top-0">
        <DropDown
          options={[["Weekly"], ["Monthly"]]}
          setValue={setFilter}
          bg={"bg-[#F4F4F4]"}
          placeholder={"Filter"}
        />
      </div>
      <Line
        key="Sales chart"
        data={salesData}
        options={options}
        width={550}
        height={270}
      />
    </div>
  );
};

export default Graph;
