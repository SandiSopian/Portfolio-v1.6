/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui"],
      },
      colors: {
        itemColor: "#262626",
        nameColor: "#2978b5",
      },
      backgroundImage: (theme) => ({
        bghomed: "url('/src/assets/bg-home-darkmode.jpg')",
        bghomew: "url('/src/assets/bg-home-lightmode.jpg')",
        wave1: "url('/src/assets/Vector1.png')",
        wave2: "url('/src/assets/Vector2.png')",
        wave3: "url('/src/assets/Vector3.png')",
      }),
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".wave1": {
          "background-image": "url(/src/assets/wave1.svg)",
        },
        ".active": {
          fontWeight: "bold",
          transitionTimingFunction: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
          transitionDuration: "75ms",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
