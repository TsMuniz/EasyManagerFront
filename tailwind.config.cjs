/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '300px'
      },
      colors: {
        'accent': '#531f0f'
      }
    },
  },
  plugins: [],
}
