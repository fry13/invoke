/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spellSlide: {
          "0%": { transform: "translateY(-100px); opacity:0" },
          "100%": { transform: "translateY(0); opacity:1" },
        },
        rightOrbSlide: {
          "0%": { transform: "translateX(30px); opacity:0" },
          "100%": { transform: "translateX(0); opacity:1" },
        },
        leftOrbSlide: {
          "0%": { transform: "translateX(0); opacity:1" },
          "100%": { transform: "translateX(-30px); opacity:0" },
        },
      },
      animation: {
        spellSlide: "spellSlide 300ms ease-out 0s 1 normal none",
        rightOrbSlide: "rightOrbSlide 150ms ease-out 0s 1 normal none",
        leftOrbSlide: "leftOrbSlide 150ms ease-out 0s 1 normal none",
      },
    },
  },
  plugins: [],
};
