/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			maxWidth: {
				container: "1440px",
			},
			screens: {
				xs: "320px",
				sm: "375px",
				sml: "500px",
				md: "667",
				mdl: "768px",
				lg: "960px",
				lgl: "1024px",
				xl: "1280px",
			},
		},
	},
	plugins: [],
};
