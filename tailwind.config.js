/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      reddish: {
        100: "#FFE7E7",
        200: "#CAA6A6",
        300: "#B47B84",
        400: "#944E63",
      },
      slate: {
        200: "#e2e8f0",
      },
      text: {
        100: "#333",
      },
      transparent: "rgb(var(--color-transparent) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
