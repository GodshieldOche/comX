/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': "#F8FAFB",
        'mainWhite': "#FFFFFF",
        "mainBlack": "#140706",
        "primaryOne": "#52965E",
        "primaryTwo": "#D71E0E",
        "secondaryOne": "#EF4444",
        "secondaryTwo": "#FEF2F2",
        "secondaryThree": "#E55541",
        "fontOne": "#1B1E24",
        "fontTwo": "#252631",
        "fontThree": "#1E1E1E",
        "fontFour": "#98A9BC",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      }
    },
  },
  plugins: [],
}
