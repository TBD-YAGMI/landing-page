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
				neutral: '#F5F5F5',
				primary: '#FF6F61',
				accent: '#00A4FF',
			},
		},
	},
	plugins: [],
};
