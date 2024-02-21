/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      hero: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      reddish: {
        100: "#FFE7E7",
        200: "#CAA6A6",
        300: "#B47B84",
        400: "#944E63",
      },
      nature: {
        100: "#E1F0DA",
        200: "#D4E7C5",
        300: "#BFD8AF",
        400: "#99BC85",
        500: "#5C8374",
      },

      text: {
        100: "#333",
        200: "#e2e8f0",
      },
      transparent: "rgb(var(--color-transparent) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
