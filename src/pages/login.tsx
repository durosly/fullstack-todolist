import { useReducer } from "react";
import Wrapper from "@/components/layout/wrapper";
import Github from "@/icons/github";
import Google from "@/icons/google";
import Link from "next/link";
import EyeClose from "@/icons/eye-close";
import EyeOpen from "@/icons/eye-open";

interface SignupUserType {
	email: string;
	username: string;
	password: string;
}

interface SignupType {
	isLoading: boolean;
	user: SignupUserType;
	togglePassword: boolean;
}

interface Action {
	type:
		| "SIGNIN"
		| "UPDATE_USERNAME"
		| "UPDATE_PASSWORD"
		| "TOGGLE_SHOW_PASSWORD"
		| "IS_LOADING"
		| "IS_SUCCESS"
		| "IS_ERROR";
	data?: any | SignupUserType;
}

const initialState: SignupType = {
	isLoading: false,
	user: {
		email: "",
		password: "",
		username: "",
	},
	togglePassword: false,
};

function reducer(state: SignupType, action: Action) {
	switch (action.type) {
		case "SIGNIN":
			return { ...state, isLoading: true };

		case "UPDATE_USERNAME":
			return { ...state, user: { ...state.user, username: action.data } };
		case "UPDATE_PASSWORD":
			return { ...state, user: { ...state.user, password: action.data } };
		case "TOGGLE_SHOW_PASSWORD":
			return { ...state, togglePassword: !state.togglePassword };
		case "IS_LOADING":
			return { ...state, isLoading: true };
		case "IS_SUCCESS":
			return initialState;
		case "IS_ERROR":
			return { ...state, isLoading: false };
		default:
			return state;
	}
}

function LoginPage() {
	const [state, dispatch] = useReducer(reducer, initialState);

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
							value={state.user.username}
							onChange={(e) =>
								dispatch({
									type: "UPDATE_USERNAME",
									data: e.target.value,
								})
							}
						/>
					</div>

					<div>
						<label
							htmlFor=""
							className="input-group"
						>
							<input
								type={
									state.togglePassword ? "text" : "password"
								}
								placeholder="Password..."
								className="input w-full "
								value={state.user.password}
								onChange={(e) =>
									dispatch({
										type: "UPDATE_PASSWORD",
										data: e.target.value,
									})
								}
							/>
							<span
								onClick={() =>
									dispatch({ type: "TOGGLE_SHOW_PASSWORD" })
								}
								className="bg-transparent cursor-pointer"
							>
								{state.togglePassword ? (
									<EyeClose className="w-5 fill-current" />
								) : (
									<EyeOpen className="w-5 fill-current" />
								)}
							</span>
						</label>
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
