import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
	},
	borderRadius: 20,
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

export const data = {
	labels,
	datasets: [
		{
			label: "Completed",
			data: [12, 3, 5, 8, 9, 2, 8],
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Unachieved",
			data: [1, 4, 6, 2, 4, 6, 3],
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};
function BarchartDisplay() {
	return (
		<Bar
			options={options}
			data={data}
		/>
	);
}

export default BarchartDisplay;
