/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rancho: "'Rancho'",
      },
    },
  },
  plugins: [require("daisyui")],
};
