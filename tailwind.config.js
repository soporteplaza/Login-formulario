/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'plaza-color': '#97bf3c',
      }
    },
  },
  plugins: [],
}