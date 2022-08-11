/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-800": "hsl(209, 23%, 22%)",
        "dark-blue-700": "hsl(207, 26%, 17%)",
        "dark-blue-900": "hsl(200, 15%, 8%)",
        "gray-50": "hsl(0, 0%, 98%)",
        "gray-500": "hsl(0, 0%, 52%)",
      },
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
