/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/*.vue", 
    "./pages/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        'block-col': '#D9D9D9'
      }
    },
  },
  plugins: [],
}