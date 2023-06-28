import {
  Chart as ChartJS,
  BarElement,
  PointElement,
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  PointElement,
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

const options = {
  responsive: true,
  animations: false,
  layout: {
    padding: 5,
  },
  scales: {
    y: {
      min: 0,
      max: 5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function Chart(props) {
  const labels = ['S', 'M', 'L', 'XL', 'XXL'];
  const data = {
    datasets: [
      {
        label: 'Size Stock',
        data: props.stock,
        backgroundColor: 'rgb(77, 69, 93)',
        maxBarThickness: 20,
      },
    ],
    labels,
  };

  return <Bar data={data} options={options} />;
}

export default Chart;
