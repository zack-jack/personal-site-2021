const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fill: (theme) => ({
      'gray-100': theme('colors.gray.100'),
      'gray-400': theme('colors.gray.400'),
      'primary-100': theme('colors.primary.100'),
    }),
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        primary: {
          100: '#2ac2c1',
          200: '#219897',
        },
        secondary: {
          100: '#3B2C85',
          200: '#22194C',
        },
        red: '#E5274C',
      },
      fontFamily: {
        heading: ['Poppins, Helvetica, Arial, sans-serif'],
        body: ['Inter, Helvetica, Arial, sans-serif'],
      },
      screens: {
        sm: '375px',
        smd: '481px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
