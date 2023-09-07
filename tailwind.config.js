/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0085FF',
        'success': '#04C900',
        'warning': '#fff700',
        'danger': '#ff0000'
      },
      fontFamily: {
        light : 'Poppins_300Light', 
        regular : 'Poppins_400Regular', 
        medium : 'Poppins_500Medium',
        semibold : 'Poppins_600SemiBold', 
        bold : 'Poppins_700Bold',
        // sans: ['Poppins_500Medium', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

