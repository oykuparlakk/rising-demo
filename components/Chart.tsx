import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Data Usage per Network",
        data: [0, 1, 3, 5, 10, 7, 4],
        borderColor: "#000000",
        borderWidth: 3,
        pointRadius: 0,
        fill: false,
        tension: 0.4,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
        ticks: {
          stepSize: 1,
          callback: function (value:any) {
            if (
              value === 0 ||
              value === 1 ||
              value === 3 ||
              value === 5 ||
              value === 10
            ) {
              return value + "GB";
            }
          },
        },
        grid: {
          drawBorder: false,
          color: (context:any) => {
            if (context.tick.value === 0) {
              return "transparent";
            }
            return "#F2F2F2";
          },
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <div className="container w-9/12 bg-white rounded-2xl p-5 flex flex-col items-start">
      <h2 className="text-accent-900 text-sm leading-5 px-5 font-bold">Data usage per network</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
