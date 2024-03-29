import React from "react";

function Priority({ className }: { className: string }) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<rect
				width={240}
				height={32}
				x={256}
				y={416}
			/>

			<rect
				width={240}
				height={32}
				x={256}
				y="309.333"
			/>

			<rect
				width={240}
				height={32}
				x={256}
				y="202.667"
			/>

			<rect
				width={168}
				height={32}
				x={328}
				y={96}
			/>

			<path d="M302,111,167.2,27.216V96h-5.965C121.783,96,84.91,114.755,57.4,148.81,30.7,181.866,16,225.616,16,272s14.7,90.134,41.4,123.19C84.91,429.245,121.783,448,161.231,448H216V416H161.231C98.8,416,48,351.4,48,272S98.8,128,161.231,128H167.2v69.228ZM199.2,84.784,242,111.391,199.2,138.772Z" />
		</svg>
	);
}

export default Priority;
