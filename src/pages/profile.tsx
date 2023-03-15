import AuthWrapper from "@/components/layout/auth-wrapper";
import Envelope from "@/icons/envelope";
import Phone from "@/icons/phone";
import Plus from "@/icons/plus";
import User from "@/icons/user";

function Profile() {
	return (
		<AuthWrapper>
			<div className="text-center mb-20">
				<div className="bg-slate-100 w-28 h-28 mx-auto rounded-full flex justify-center items-center relative">
					<span>AV</span>
					<label
						className="absolute bottom-2 right-1 w-5 h-5 cursor-pointer flex justify-center items-center outline rounded-full"
						htmlFor="upload"
					>
						<Plus className="w-3" />
					</label>
				</div>

				<div className="flex flex-col md:flex-row gap-5 justify-center my-10">
					<p className="space-x-5 bg-primary bg-opacity-5 px-5 py-3 rounded-full">
						<span>Todo:</span>
						<span className="font-bold">3,000</span>
					</p>
					<p className="space-x-5 bg-primary bg-opacity-5 px-5 py-3 rounded-full">
						<span>Successful:</span>
						<span className="font-bold">2,300</span>
					</p>
					<p className="space-x-5 bg-green-100 5 px-5 py-3 rounded-full">
						<span>Score:</span>
						<span className="font-bold">76.7%</span>
					</p>
				</div>
				<div className="divider max-w-xl mx-auto">info</div>
				<ul className="mt-10 space-y-5 flex flex-col items-center">
					<li className="bg-slate-100 rounded-full max-w-xl py-3 px-10 flex gap-2">
						<User className="w-5 fill-current" />
						<span>durosly</span>
					</li>
					<li className="bg-slate-100 rounded-full max-w-xl py-3 px-10 flex gap-2">
						<Envelope className="w-5 fill-current" />
						<span>duro.slyvester@gmail.com</span>
					</li>
					<li className="bg-slate-100 rounded-full max-w-xl py-3 px-10 flex gap-2">
						<Phone className="w-5 fill-current" />
						<span>123456789</span>
					</li>
				</ul>

				<button className="btn btn-error btn-outline mt-20">
					Sign out
				</button>
			</div>
		</AuthWrapper>
	);
}

export default Profile;
