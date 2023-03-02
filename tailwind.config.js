
/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: [
    "./Src/App.{js,jsx,ts,tsx}",
    "./Src/Screens/HomeScreen.{js,jsx,ts,tsx}",
    "./Src/Screens/DemoScreen.{js,jsx,ts,tsx}",
    "./Src/Screens/PaywallScreen.{js,jsx,ts,tsx}",
    "./Src/Components/ActionRoll.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
};
