/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},

    colors: {
      midblue: '#7CB9E8',
      rightblue:"#72A0C1",
      blueRgb:"rgb(0, 218, 255)"
    }

  },

  plugins: [
    require('flowbite/plugin')
  ],

}