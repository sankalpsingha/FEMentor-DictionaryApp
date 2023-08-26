/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Inconsolata", "monospace"],
      },
      colors: {
        themeblack: "hsl(0, 0%, 2%)",
        lighterBlack: "hsl(0, 0%, 12%)",
        darkGray: "hsl(0, 0, 18%)",
        themegray: "hsl(0, 0%, 23%)",
        lightGray: "hsl(0, 0%, 51%)",
        offWhite: "hsl(0, 0%, 91%)",
        offWhiteLight: "hsl(0, 0%, 96%)",
        themewhite: "hsl(0, 0%, 100%)",
        purple: "hsl(274, 82%, 60%)",
        lightPurple: "hsl(274, 42%, 85%)",
        orange: "hsl(0, 100%, 66%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
