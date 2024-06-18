/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#eeeeee',
      'black': '#010101',
      'strongred': '#990000',
      'softred': '#990015',
    },
    extend: {
      backgroundImage: {
        'static-black': "url('/public/static_black.gif')",
        'starry': "url('/public/skska.png')",
      }
    },
	plugins: [],
  }
}
