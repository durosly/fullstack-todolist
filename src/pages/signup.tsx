import Wrapper from "@/components/layout/wrapper";
import Github from "@/icons/github";
import Google from "@/icons/google";
import Link from "next/link";

function SignupPage() {
	return (
		<Wrapper>
			<form
				className="max-w-md bg-slate-100 p-10 rounded-2xl mx-auto my-20"
				action="/signup"
			>
				<div className="space-y-5">
					<div>
						<h1 className="text-4xl text-center mb-3">Signup</h1>
						<p>Enter your details to get started</p>
					</div>
					<div>
						<input
							type="text"
							placeholder="Username..."
							className="input w-full "
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Email..."
							className="input w-full "
						/>
					</div>
					<div>
						<input
							type="password"
							placeholder="Password..."
							className="input w-full "
						/>
					</div>
					<div>
						<button className="btn btn-primary btn-block">
							Submit
						</button>
					</div>
				</div>
				<div className="divider">Or sign up with</div>
				<div className="text-center space-x-5">
					<button className="btn btn-outline">
						<Github className="w-5 fill-current" />
					</button>
					<button className="btn btn-outline">
						<Google className="w-5 fill-current" />
					</button>
				</div>
				<p className="mt-5 text-center">
					Already have an account?{" "}
					<Link
						className="font-bold"
						href="/login"
					>
						Login
					</Link>
				</p>
			</form>
		</Wrapper>
	);
}

export default SignupPage;
