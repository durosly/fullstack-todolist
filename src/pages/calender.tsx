import { useState, useEffect } from "react";
import CalendarDates from "calendar-dates";
import AuthWrapper from "@/components/layout/auth-wrapper";
import ArrowRight from "@/icons/arrow-right";

type DateType = {
	date: number;
	iso: string;
	type: "previous" | "current";
};

type WeekType = DateType[];

type MonthType = WeekType[];

function Calender() {
	const [dates, setDates] = useState<MonthType>([]);
	const calendarDates = new CalendarDates();

	useEffect(() => {
		async function load() {
			const matrix = await calendarDates.getMatrix(new Date());

			setDates(matrix);
		}

		load();
	});

	return (
		<AuthWrapper>
			<div className="flex justify-center gap-10 max-w-sm mx-auto mt-10">
				<span className="cursor-pointer">
					<ArrowRight className="w-5 rotate-180" />
				</span>
				<input
					type="month"
					id="start"
					name="start"
					min="2018-03"
					value="2018-05"
				/>
				<span className="cursor-pointer">
					<ArrowRight className="w-5 " />
				</span>
			</div>
			<div className="max-w-sm mx-auto mt-10 bg-slate-100 p-5 rounded-2xl">
				<ul className="flex">
					<li className="flex-1 text-center p-2">Sun</li>
					<li className="flex-1 text-center p-2">Mon</li>
					<li className="flex-1 text-center p-2">Tue</li>
					<li className="flex-1 text-center p-2">Wed</li>
					<li className="flex-1 text-center p-2">Thur</li>
					<li className="flex-1 text-center p-2">Fri</li>
					<li className="flex-1 text-center p-2">Sat</li>
				</ul>
				<ul>
					{dates.map((w) => (
						<li>
							<ul className="flex">
								{w.map((d) => (
									<li
										className={`flex-1 text-center p-2 ${
											d.type === "current"
												? "font-bold cursor-pointer hover:bg-slate-500 hover:text-white rounded-2xl"
												: "font-light text-slate-400 cursor-not-allowed"
										}`}
									>
										{d.date}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</AuthWrapper>
	);
}

export default Calender;
