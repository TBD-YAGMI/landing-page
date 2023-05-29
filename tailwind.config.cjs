/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				chromate: ['Chromate', 'serif'],
				'work-sans': ['Work Sans', 'sans-serif'],
			},
			colors: {
				'yagmi-pink': '#FF97D6',
				'yagmi-blue': '#3030D0',
				'yagmi-yellow': '#FFC501',
				'yagmi-aqua': '#00DEB5',
			},
		},
	},
	plugins: [],
};
