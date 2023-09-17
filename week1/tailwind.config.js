/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "os-dark-black": "#05080F",
        "os-grey": "#131E30",
        "os-midnight-blue": "#34435A",
        "os-white": "#FDFEFF",
        "os-lightblue": "#7F94A9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
