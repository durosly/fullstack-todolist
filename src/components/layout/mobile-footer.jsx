import Calender from "@/icons/calender";
import Chart from "@/icons/chart";
import Home from "@/icons/home";
import Link from "next/link";

function MobileFooter() {
	return (
		<div className="btm-nav h-10 sm:hidden">
			<Link href="/management">
				<Home className="h-5 w-5" />
			</Link>
			<Link
				href="/calender"
				className="active"
			>
				<Calender className="w-5 h-5" />
			</Link>
			<Link href="/dashboard">
				<Chart className="w-5 h-5" />
			</Link>
			<Link href="/profile">
				<label
					tabIndex={0}
					className="bg-slate-300 flex items-center justify-center text-xs m-1 w-5 h-5 overflow-hidden rounded-[50%]"
				>
					AV
				</label>
			</Link>
		</div>
	);
}

export default MobileFooter;
