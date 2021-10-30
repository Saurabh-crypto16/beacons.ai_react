import { Line } from "react-chartjs-2";
import "./Chart.css";

const data = {
  labels: [
    "Mon 25",
    "Tue 26",
    "Wed 27",
    "Thu 28",
    "Fri 29",
    "Sat 30",
    "Oct 31",
  ],
  datasets: [
    {
      label: "Page Views",
      data: [0, 0, 0, 0, 0, 1, 0],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

function Chart() {
  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
