/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				climate: ["Climate Crisis", "cursive"],
				roboto: ["Roboto", "sans-serif"],
				itim: ["Itim", "cursive"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
};
