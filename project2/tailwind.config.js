/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.ejs",
    "./views/**/*.ejs",
    "./public/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

