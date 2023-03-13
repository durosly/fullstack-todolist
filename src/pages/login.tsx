import Wrapper from "@/components/layout/wrapper";
import Github from "@/icons/github";
import Google from "@/icons/google";
import Link from "next/link";

function LoginPage() {
	return (
		<Wrapper>
			<form
				className="max-w-md bg-slate-100 p-10 rounded-2xl mx-auto my-20"
				action="/login"
			>
				<div className="space-y-5">
					<div>
						<h1 className="text-4xl text-center mb-3">Login</h1>
						<p>
							Enter your details to get back to managing your task
						</p>
					</div>
					<div>
						<input
							type="text"
							placeholder="Username/E-mail..."
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
				<div className="divider">Or sign in with</div>
				<div className="text-center space-x-5">
					<button className="btn btn-outline">
						<Github className="w-5 fill-current" />
					</button>
					<button className="btn btn-outline">
						<Google className="w-5 fill-current" />
					</button>
				</div>
				<p className="text-center mt-5">
					Don&apos;t have an account?{" "}
					<Link
						className="font-bold"
						href="/signup"
					>
						Join us now
					</Link>
				</p>
			</form>
		</Wrapper>
	);
}

export default LoginPage;
