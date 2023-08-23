/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#F5F5F5",
        lightGray: "#FAF7F0",
        pink: "#FE6244",
        darkPink: "#F94C10",
        yellow: "#FFD40D",
        lightYellow: "#FFF9B0",
        ocean: "#33BBC5",
        peach: "#FFBCBC",
      },
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};

