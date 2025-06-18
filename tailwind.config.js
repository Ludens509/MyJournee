/* eslint-env node */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'sm': { 'min': '300px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '768px', },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': { 'min': '1024px', 'max': '1279px' },
      'mobile': { 'max': '750px' },
    },
    extend: {
      gridTemplateRows: {
        '02': 'repeat(2, 1fr))',
      },
      gridTemplateColumns: {
        '02': 'repeat(2, auto)',
      },
      gridRow: {
        'span-2': 'span 1 / span 2',
        'span-3': 'span 2 / span 2'
      },
      scale: {
        130: '1.3',
        101: '1.01',
        110: '1.1',
      }
    },
  },
  colors: {
    meta: '#565584',
    purple: '#5F3B96',
    brownlight: '#A1683B',
    summary: '#4F4F4F',
  },
  plugins: [
    flowbite.plugin(),
    require('tailwind-scrollbar'),
  ],
}

