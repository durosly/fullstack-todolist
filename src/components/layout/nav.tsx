import Link from "next/link";

type NavType = {
	isMobile?: boolean;
	isAuth?: boolean;
};

function Nav({ isMobile, isAuth }: NavType) {
	if (isAuth) {
		return (
			<>
				<li>
					<Link href="/dashboard">Analytics</Link>
				</li>
				<li>
					<Link href="/calender">Calender</Link>
				</li>
				<li tabIndex={0}>
					<a className="justify-between">
						Theme
						<svg
							className={`fill-current ${
								isMobile && "rotate-90"
							}`}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
						</svg>
					</a>
					<ul className="p-2">
						<li>
							<a>Submenu 1</a>
						</li>
						<li>
							<a>Submenu 2</a>
						</li>
					</ul>
				</li>
				<li>
					<Link href="/management">Todo</Link>
				</li>
				<li>
					<button className="btn btn-error bg-opacity-10 lg:hidden">
						Sign out
					</button>
				</li>
			</>
		);
	}
	return (
		<>
			<li>
				<Link href="/features">Features</Link>
			</li>
			<li>
				<Link href="/about-us">About Us</Link>
			</li>
			<li tabIndex={0}>
				<a className="justify-between">
					Theme
					<svg
						className={`fill-current ${isMobile && "rotate-90"}`}
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
					</svg>
				</a>
				<ul className="p-2">
					<li>
						<a>Submenu 1</a>
					</li>
					<li>
						<a>Submenu 2</a>
					</li>
				</ul>
			</li>
		</>
	);
}

export default Nav;
