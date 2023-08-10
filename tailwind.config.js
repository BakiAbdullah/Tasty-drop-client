/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#B0A4A4",
        pink: "#f3274c",
      },
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};

