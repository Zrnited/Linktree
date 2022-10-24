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
        gray400: '#98A2B3'
      },
      width: {
        90: '90%',
        88: '88px',
        40: '40px'
      },
      height: {
        90: '93px',
        40: '40px'
      }
    },
  },
  plugins: [],
}
