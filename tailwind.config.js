const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fill: (theme) => ({
      white: theme('colors.white'),
      'gray-500': theme('colors.gray.500'),
      'gray-700': theme('colors.gray.700'),
      'gray-800': theme('colors.gray.800'),
    }),
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        gray: {
          ...colors.gray,
        },
        primary: {
          100: '#274BE3',
          200: '#2343cc',
        },
        secondary: {
          100: '#27E4C0',
          200: '#23cdac',
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
  plugins: [],
};
