/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#EFF5F5",
        lightGray: "#FAF7F0",
        pink: "#FE6244",
      },
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};

