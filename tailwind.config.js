/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      
      'Rubik': ['Rubik', 'sans-serif'],
      
    },
    extend: {
      colors: {
        sky: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#0284c7',
          '700': '#0369a1',
          '800': '#075985',
          '900': '#0c4a6e',
          '950': '#082f49',
        },
        'genoa': {
  DEFAULT: '#166064',
  50: '#57D3DA',
  100: '#47CFD6',
  200: '#2CC0C8',
  300: '#25A0A7',
  400: '#1D8085',
  500: '#166064',
  600: '#0C3436',
  700: '#020808',
  800: '#000000',
  900: '#000000',
  950: '#000000'
},
      },
    },
  },
  plugins: [],
});