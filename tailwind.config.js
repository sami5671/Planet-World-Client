/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/rizzui/dist/**/*.{js,ts,jsx,tsx}", // Ensure Rizz UI components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
