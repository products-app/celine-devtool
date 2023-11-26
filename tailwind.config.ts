/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        primary: 'rgb(99, 102, 241)'
      }
    },
  },
  plugins: [],
}
