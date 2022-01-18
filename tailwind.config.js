const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  // darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "0rem",
      },
    },
    fontSize: {
      sm: ["16px", { lineHeight: "28px", letterSpacing: ".5px" }],
      base: ["18px"],
      lg: ["28px", { letterSpacing: "-0.84px" }],
      xl: ["36px", { letterSpacing: "-1.08px" }],
      "2xl": ["40px", { letterSpacing: "-1.2px" }],
      "3xl": ["64px", { letterSpacing: "-1.92px" }],
    },
    extend: {
      colors: {
        "primary-900": "hsl(356, 100%, 66%)",
        "primary-800": "hsl(355, 100%, 74%)",
        "black-900": "hsl(208, 49%, 24%)",
        "black-800": "hsl(207, 13%, 34%)",
        "black-700": "hsl(240, 2%, 79%)",
        "black-blue-900": "hsl(240, 10%, 16%)",
      },
      fontFamily: {
        ubuntu: ["'Ubuntu'", ...defaultTheme.fontFamily.mono],
        mono: ["'Overpass'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1112px",
        },
      });
    }),
  ],
};
