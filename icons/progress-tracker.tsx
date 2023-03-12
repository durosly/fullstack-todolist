import React from "react";

function ProgressTracker({ className }: { className: string }) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
			viewBox="0 0 32 32"
			data-name="Layer 1"
			id="Layer_1"
		>
			<title />
			<path d="M23.93,2H8.07a2.8,2.8,0,0,0-2.8,2.8V27.2A2.8,2.8,0,0,0,8.07,30H23.93a2.8,2.8,0,0,0,2.8-2.8V4.8A2.8,2.8,0,0,0,23.93,2Zm.94,25.2a.94.94,0,0,1-.94.93H8.07a.94.94,0,0,1-.94-.93V4.8a.94.94,0,0,1,.94-.93H23.93a.94.94,0,0,1,.94.93Z" />
			<path d="M22.53,11.33H19.46a.94.94,0,0,0-.74.37l-4.26,5.51-3.28-.63a.93.93,0,0,0-.94.38L8.7,19.21a.94.94,0,0,0,.77,1.46,1,1,0,0,0,.77-.41l1.19-1.73,3.24.63a.94.94,0,0,0,.92-.35l4.33-5.61h2.61a.94.94,0,1,0,0-1.87Z" />
		</svg>
	);
}

export default ProgressTracker;
