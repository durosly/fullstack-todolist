import AuthWrapper from "@/components/layout/auth-wrapper";
import Calender from "@/icons/calender";
import Clock from "@/icons/clock";
import Plus from "@/icons/plus";

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

			<div className="max-w-xl mx-auto mt-20">
				<h2 className="text-2xl text-center">Todo List</h2>
				<div className="form-control">
					<div className="input-group">
						<input
							type="text"
							placeholder="Todo..."
							className="input input-bordered flex-1"
						/>
						<button className="btn btn-square">
							<Plus className="w-6 h-6 fill-current" />
						</button>
					</div>
				</div>
			</div>
		</AuthWrapper>
	);
}

export default Management;
