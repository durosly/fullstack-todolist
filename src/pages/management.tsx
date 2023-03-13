import AuthWrapper from "@/components/layout/auth-wrapper";
import Calender from "@/icons/calender";
import Clock from "@/icons/clock";
import Edit from "@/icons/edit";
import Plus from "@/icons/plus";
import Thumb from "@/icons/thumb";
import Trash from "@/icons/trash";

function Management() {
	return (
		<AuthWrapper>
			<div className="bg-slate-100 p-5 px-10 max-w-xl rounded-full mx-auto mt-10">
				<p className="font-bold flex gap-2 items-center">
					<Calender className="w-5" />
					Thursday 11th, November 2023
				</p>
				<p className="text-xs text-right flex gap-2 justify-end">
					<Clock className="w-4" />
					10:20:23 am
				</p>
			</div>

			<div className="max-w-xl mx-auto mt-10">
				<h2 className="text-2xl text-center">Todo List</h2>
				<div className="form-control">
					<div className="input-group rounded-full">
						<input
							type="text"
							placeholder="Todo..."
							className="input input-bordered flex-1 !rounded-l-full"
						/>
						<button className="btn !rounded-r-full">
							<Plus className="w-6 h-6 fill-current" />
						</button>
					</div>
				</div>
				<ul className="mt-10">
					<li className="flex justify-between items-center bg-slate-100 py-4 px-10 rounded-full cursor-grab">
						<span>Grocery</span>
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="bg-slate-200 py-1 px-2 rounded-full"
							>
								💤 Inactive
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content menu p-2 bg-base-100 shadow-xl rounded-box w-52"
							>
								<li className="cursor-pointer py-1 hover:bg-slate-400 px-3 hover:text-white">
									💤 Inactive
								</li>
								<li className="cursor-pointer py-1 hover:bg-slate-400 px-3 hover:text-white">
									🏃‍♂️ In progress
								</li>
								<li className="cursor-pointer py-1 hover:bg-slate-400 px-3 hover:text-white">
									✅ Done
								</li>
							</ul>
						</div>
						<button className="btn btn-sm btn-outline btn-error">
							<Trash className="w-4 fill-current" />
						</button>
					</li>
				</ul>
			</div>
			<label className="swap fixed bottom-10 right-10 bg-slate-200 w-10 h-10 rounded-full">
				{/* this hidden checkbox controls the state */}
				<input type="checkbox" />
				{/* volume on icon */}
				<Edit className="swap-on fill-current w-5" />

				{/* volume off icon */}
				<Thumb className="swap-off fill-current w-5" />
			</label>
		</AuthWrapper>
	);
}

export default Management;
