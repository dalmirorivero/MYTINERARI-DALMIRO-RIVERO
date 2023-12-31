/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
    },
    extend: {
      colors: {
        customGreen: '#376058',
        customOrange: '#ff7d34',
        customCream: '#EADBC8'
      },
      fontFamily: {
        josefin: ['Josefin Sans']
      },
      screens: {
        'sm': '640px',
        'md': '770px',
        'lg': '920px',
        'xl': '1024px',
        'xxl': '1080px'
      } 
    },
  },
  plugins: [],
}