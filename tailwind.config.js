const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./out/index.html",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      dark: "#1C1D27",
      lightDark: "#535873",
      purple: "#AF8EFF",
      purpleGradient: "#9068FE",
      lightOrangeGradient: "#FEB068",
      gray: "#A2A4BA",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      19: "1.1875rem",
      21: "1.3125rem",
    },
    extend: {},
  },
  plugins: [],
};
