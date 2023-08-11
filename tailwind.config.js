/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#EFF5F5",
        lightGray: "#FAF7F0",
        pink: "#f3274c",
      },
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};

