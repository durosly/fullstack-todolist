import Link from "next/link";
import Nav from "./nav";

function Header({ isAuth }: { isAuth?: boolean }) {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<Nav isAuth={isAuth} />
					</ul>
				</div>
				<Link
					href="/"
					className="btn btn-ghost normal-case text-xl"
				>
					Tareasy
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<Nav
						isMobile
						isAuth={isAuth}
					/>
				</ul>
			</div>
			<div className="navbar-end">
				{isAuth ? (
					<div className="dropdown dropdown-end hidden lg:block">
						<label
							tabIndex={0}
							className="bg-slate-300 cursor-pointer flex items-center justify-center text-xl font-bold m-1 w-10 h-10 overflow-hidden rounded-[50%]"
						>
							AV
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link href="/profile">Profile</Link>
							</li>
							<li>
								<button className="btn btn-ghost justify-start">
									Sign out
								</button>
							</li>
						</ul>
					</div>
				) : (
					<Link
						className="btn btn-primary rounded-full w-28"
						href="/login"
					>
						Log in
					</Link>
				)}
			</div>
		</div>
	);
}

export default Header;
