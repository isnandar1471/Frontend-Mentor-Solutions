/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue500: "hsl(215, 51%, 70%)",
        cyan400: "hsl(178, 100%, 50%)",
        mainBG: "hsl(217, 54%, 11%)",
        cardBG: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}