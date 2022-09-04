/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Abril Fatface', cursive",
        dm: "'DM Serif Text', serif",
      },
      colors: {
        'background': '#2A2727',

      }
    },
  },
  plugins: [],
}
