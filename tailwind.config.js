const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        gray: {
          ...colors.gray,
          100: '#EFF0FC',
          200: '#A3A8BF',
          300: '#050408',
        },
        blue: {
          ...colors.blue,
          100: '#2D26FB',
          200: '#150DFB',
        },
        violet: {
          ...colors.violet,
          100: '#9FA5F6',
          200: '#65669F',
          300: '#484764',
        },
      },
      fontFamily: {
        heading: ['Poppins, Helvetica, Arial, sans-serif'],
        body: ['Source Sans Pro, Helvetica, Arial, sans-serif'],
      },
    },
  },
  plugins: [],
};
