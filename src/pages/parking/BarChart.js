import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const BarChart = ({ chartData, chartOptions }) => {
  return <Bar data={chartData} options={chartOptions} />;
};
