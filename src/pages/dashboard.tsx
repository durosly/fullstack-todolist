import React, { useState, forwardRef, ForwardedRef } from "react";
import DatePicker from "react-datepicker";
import AuthWrapper from "@/components/layout/auth-wrapper";
import Calender from "@/icons/calender";
import Chart from "@/icons/chart";
import Priority from "@/icons/priority";
import ProgressTracker from "@/icons/progress-tracker";
import Trash from "@/icons/trash";
import BarchartDisplay from "@/components/barchartDisplay";

const CustomInput = forwardRef(
	(
		props: React.HTMLProps<HTMLButtonElement>,
		ref: React.Ref<HTMLButtonElement>
	) => (
		<button
			className="flex items-center gap-2"
			onClick={props.onClick}
		>
			<Calender className="w-5 fill-primary/30" />
			{props.value}
		</button>
	)
);

CustomInput.displayName = "CustomInput";

function Dashboard() {
	const [startDate, setStartDate] = useState(new Date());
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

			<div className="mt-20 max-w-2xl mx-auto bg-slate-100 rounded-2xl py-5">
				<h2 className="px-3 uppercase font-bold">
					⌛ Current and next todo
				</h2>
				<ul className="">
					<li className="flex justify-between items-center py-4 px-3 md:px-10 first:border-b-4">
						<span className="truncate">
							<span className="font-bold mr-2">1.</span>Grocery
						</span>
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="bg-slate-200 py-1 px-2 rounded-full whitespace-nowrap"
							>
								🏃‍♂️{" "}
								<span className="hidden md:inline">
									In progress
								</span>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content menu p-2 bg-base-100 shadow-xl rounded-box w-52"
							>
								<li className="cursor-pointer py-1 hover:bg-slate-400 px-3 hover:text-white">
									🏃‍♂️ In progress
								</li>
								<li className="cursor-pointer py-1 hover:bg-slate-400 px-3 hover:text-white">
									✅ Done
								</li>
							</ul>
						</div>
						<span>1:00:23</span>
					</li>
					<li className="flex justify-between items-center py-4 px-3 md:px-10 first:border-b-4">
						<span className="truncate">
							<span className="font-bold mr-2">2.</span>Buy new
							monitor
						</span>
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="bg-slate-200 py-1 px-2 rounded-full whitespace-nowrap"
							>
								💤{" "}
								<span className="hidden md:inline">
									Inactive
								</span>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content menu p-2 bg-base-100 shadow-xl rounded-box w-52"
							>
								<li className="cursor-pointer py-1 hover:bg-slate-400 px-3 hover:text-white">
									🏃‍♂️ In progress
								</li>
								<li className="cursor-pointer py-1 hover:bg-slate-400 px-3 hover:text-white">
									✅ Done
								</li>
							</ul>
						</div>
						<span>--:--:--</span>
					</li>
				</ul>
			</div>

			<div className="mt-20 max-w-2xl mx-auto bg-slate-100 rounded-2xl py-5 px-3 md:px-10 mb-20">
				<h2 className="uppercase font-bold mb-5">📈 Productivity</h2>
				<div className="flex justify-between md:justify-end items-center md:gap-20 mb-5">
					<div className="flex flex-wrap md:flex-nowrap md:gap-5">
						<span>From: </span>
						<DatePicker
							selected={startDate}
							onChange={(date: Date) => setStartDate(date)}
							customInput={<CustomInput />}
						/>
					</div>
					<div className="flex flex-wrap md:flex-nowrap md:gap-5">
						<span>To: </span>
						<DatePicker
							selected={startDate}
							onChange={(date: Date) => setStartDate(date)}
							customInput={<CustomInput />}
						/>
					</div>
				</div>
				<BarchartDisplay />
			</div>
		</AuthWrapper>
	);
}

export default Dashboard;
