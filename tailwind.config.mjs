import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// 'primary' : '#fff	',
				// 'primary' : '#333',
				'primary': "var(--color-primary)",
				'secondary' : 'var(--color-secondary)',
				'twich': '#6441a4'
			}
		},
	},
	plugins: [animations],
}
