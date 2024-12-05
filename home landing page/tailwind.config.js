/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292736',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          hover: '#b88c5d',
          secondary: '#f4f0ec',
        },
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      fontFamily: {
        primary: 'DM Serif Display',
        secondary: 'Jost',
      },
      backgroundImage: {
        hero: "url('../images/hero/bg.jpg')",
        grid: "url('../images/grid.png')",
      },
    },
  },
  
  plugins: [],
}
