/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      'limit': '1440px',
    },
    screens: {
      'xxxs': "320px",
      'xxs': "375px",
      'xs': "425px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      'limit': "1440px",
      'max-limit': { max: '1440px' },
      "max-xl": { max: "1280px" },
      "max-lg": { max: "1024px" },
      "max-md": { max: "768px" },
      "max-sm": { max: "640px" },
      "max-xs": { max: "425px" },
      "max-xxs": { max: "375px" },
      "max-xxxs": { max: "320px" },
    },
    colors: {
      'link': '#0000EE',
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
      'slate': colors.slate,
      'emerald': colors.emerald,
      'indigo': colors.indigo,
      'yellow': colors.yellow,
      'red': colors.red,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'lower-roman',
    },
    extend: {},
  },
  plugins: [],
}
