/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "os-dark-black": "#05080F",
        "os-grey": "#131E30",
        "os-midnight-blue": "#34435A",
        "os-white": "#FDFEFF",
        "os-lightblue": "#7F94A9",
      },
    },
  },
  plugins: [],
};
