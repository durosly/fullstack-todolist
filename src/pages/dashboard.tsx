import AuthWrapper from "@/components/layout/auth-wrapper";
import Chart from "@/icons/chart";
import Priority from "@/icons/priority";
import ProgressTracker from "@/icons/progress-tracker";
import Trash from "@/icons/trash";

function Dashboard() {
	return (
		<AuthWrapper>
			<div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-5 justify-center mt-10">
				<div className="relative flex-1 md:max-w-[200px] bg-pink-200 overflow-hidden text-center p-3 md:p-5 rounded-2xl">
					<Chart className="w-20 md:w-28 fill-pink-300 absolute -top-5 -right-5" />
					<p className="text-3xl md:text-8xl relative text-shadow">
						30
					</p>
					<p className="relative uppercase">Total todos</p>
				</div>
				<div className="relative flex-1 md:max-w-[200px] bg-green-200 overflow-hidden text-center p-3 md:p-5 rounded-2xl">
					<Priority className="w-20 md:w-28 fill-green-300 absolute -top-5 -right-5" />
					<p className="text-3xl md:text-8xl relative ">17</p>
					<p className="relative uppercase">Completed</p>
				</div>
				<div className="relative flex-1 md:max-w-[200px] bg-yellow-200 overflow-hidden text-center p-3 md:p-5 rounded-2xl">
					<Trash className="w-20 md:w-28 fill-yellow-300 absolute -top-5 -right-5" />
					<p className="text-3xl md:text-8xl relative ">13</p>
					<p className="relative uppercase">Unachieved</p>
				</div>
				<div className="relative flex-1 md:max-w-[200px] bg-purple-200 overflow-hidden text-center p-3 md:p-5 rounded-2xl">
					<ProgressTracker className="w-20 md:w-28 fill-purple-300 absolute -top-5 -right-5" />
					<p className="text-3xl md:text-8xl relative ">56</p>
					<p className="relative uppercase">Productivity(%)</p>
				</div>
			</div>
		</AuthWrapper>
	);
}

export default Dashboard;
