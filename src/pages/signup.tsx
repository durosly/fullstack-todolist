import { useReducer, FormEvent } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import toast from "react-hot-toast";
import Wrapper from "@/components/layout/wrapper";
import Github from "@/icons/github";
import Google from "@/icons/google";
import Link from "next/link";
import EyeClose from "@/icons/eye-close";
import EyeOpen from "@/icons/eye-open";
import { UserSignupResponseDataType } from "@/types/shared/user";

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
		| "SIGNUP"
		| "UPDATE_EMAIL"
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
		case "SIGNUP":
			return { ...state, isLoading: true };
		case "UPDATE_EMAIL":
			return { ...state, user: { ...state.user, email: action.data } };
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

function SignupPage() {
	const [state, dispatch] = useReducer(reducer, initialState);

	async function signup(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch({ type: "IS_LOADING" });
		const toastId = toast.loading("Loading...");

		try {
			const {
				data,
			}: AxiosResponse<UserSignupResponseDataType, SignupUserType> =
				await axios.post("/api/auth/signup", state.user);

			if (data.status === true) {
				dispatch({ type: "IS_SUCCESS" });
				toast.dismiss(toastId);
				toast.success("Signup successful", { id: toastId });
			} else {
				throw new Error(data.message);
			}
		} catch (error: unknown | Error | AxiosError) {
			let errMsg = "";

			if (axios.isAxiosError(error)) {
				errMsg = error.response?.data.message;
			} else if (error instanceof Error) {
				errMsg = error.message;
			}

			dispatch({ type: "IS_ERROR" });
			toast.dismiss(toastId);
			toast.error(errMsg, { id: toastId });
		}
	}
	return (
		<Wrapper>
			<form
				className="max-w-md bg-slate-100 p-10 rounded-2xl mx-auto my-20"
				action="/signup"
				onSubmit={signup}
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
						<input
							type="email"
							placeholder="Email..."
							className="input w-full "
							value={state.user.email}
							onChange={(e) =>
								dispatch({
									type: "UPDATE_EMAIL",
									data: e.target.value,
								})
							}
						/>
					</div>
					<div className="form-control">
						<label className="input-group">
							<input
								type={
									state.togglePassword ? "text" : "password"
								}
								placeholder="Password..."
								className="input w-full"
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
						<button
							className={`btn ${
								state.isLoading
									? "loading cursor-not-allowed"
									: "btn-primary"
							} btn-block`}
						>
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
