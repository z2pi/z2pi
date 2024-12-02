/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#00A4EE',
        secondary: '#34A853',
        accent: {
          yellow: '#FBBC04',
          blue: '#4285F4',
          red: '#EA4335',
          orange: '#F05022',
          golden: '#FFB700'
        }
      }
    },
  },
  plugins: [],
}