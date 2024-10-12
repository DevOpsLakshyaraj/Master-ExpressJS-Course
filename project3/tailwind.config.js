/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light"]
  },
  content: [
    "./views/*.ejs",
    "./views/**/*.ejs",
    "./public/**/*.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

