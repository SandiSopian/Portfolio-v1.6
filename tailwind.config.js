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
        bgDefault: "#F1F6FF",
        bgSidebar: "#F4F5F7",
        titleColor: "#BD945A",
      },
      backgroundImage: (theme) => ({
        ysosb: "url('./images/y-so-serious.png')",
        ysosw: "url('./images/y-so-serious-white.png')",
      }),
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-img": {
          "background-image": "url(/src/assets/home-img1.jpg)",
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
