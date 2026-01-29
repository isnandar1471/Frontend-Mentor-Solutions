/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ["Hanken Grotesk"],
      },
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        orangeYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        lightSlateBlueBackground: "hsl(252, 100%, 67%)",
        lightRoyalBlueBackground: "hsl(241, 81%, 54%)",
        violetBlueCircle: "hsla(256, 72%, 46%, 1)",
        persianBlueCircle: "hsla(241, 72%, 46%, 0)",
        white: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
