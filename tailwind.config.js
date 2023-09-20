/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        roboto: ["Roboto", "sans"],
        sans: ["plex-sans", "sans-serif"],
      },
      animation: {
        text: "text 5s ease infinite",
        blob: "blob 7s infinite",
      },
      boxShadow: {
        inner: "inset 0 4px 6px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(5px, -10px) scale(0.90)",
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.95)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
