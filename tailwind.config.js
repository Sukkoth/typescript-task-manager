/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        light: "#FFFFFF",
        primary: "#DDFF94",
        secondary: "#6600CC",
        "primary-100": "#b8d47d",
        "primary-200": "#a1ba6a",
        "shade-100": "#414040",
        "shade-200": "#292929",
        "shade-300": "#1e1e1e",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
