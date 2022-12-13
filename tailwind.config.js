/** @type {import('tailwindcss').Config} */

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
        primaryColor: "#2978b5",
        secondaryColor: "#90a0d9",
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
  plugins: [],
};
