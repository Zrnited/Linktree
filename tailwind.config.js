/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      fontSize: {
        18: '18px'
      },
      backgroundColor: {
        gray200: '#EAECF0',
        gray300: '#D0D5DD',
        gray400: '#98A2B3',
        overlay: 'rgba(52, 64, 84, 0.7)'
      },

      colors: {
        customOrange: '#FF7815'
      },
      
      width: {
        90: '90%',
        85: '85%',
        80: '80%',
        88: '88px',
        40: '40px',
        10: '10px'
      },
      height: {
        132: '132px',
        90: '93px',
        40: '40px',
        30: '30px',
        50: '50px',
        44: '44px',
        2: '1px',
        10: '10px',
        400: '400px',
        450: '450px'
      }
    },
    objectPosition: {
      100: '-100%'
    },

    maxWidth: {
      750: '750px',
      200: '200px',
      300: '300px',
      400: '400px',
    },

    // minWidth: {
    //   300: '300px'
    // },

    borderColor: {
      lightblue: '#84CAFF',
      gray300: '#D0D5DD',
      red300 : 'red'
    },

    borderWidth: {
      1: '1px',
      2: '2px'
    },

    outlineColor: {
      lightblue: '#84CAFF',
    },

    boxShadowColor : {
      custom: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  plugins: [],
}
