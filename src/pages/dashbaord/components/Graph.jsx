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
  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Insight",
        data: [3000, 2000, 4000, 5000, 1000, 3000, 1000],
        borderColor: " #47BA82",
        backgroundColor: "#FFFFFF",
        tension: 0.4,
        fill: true,
        pointRadius: 8,
        pointHoverRadius: 10,
        pointBackgroundColor:"rgba(100, 200, 150, 0.5)",
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
        ticks: {
          stepSize:2000,
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
    <div className="">
      <h1 className="text-xl font-semibold mb-3">Business insight</h1>
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
