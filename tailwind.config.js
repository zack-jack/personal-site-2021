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
          ...colors.neutral,
        },
        blue: {
          100: '#55BDEA',
          200: '#27ABE5',
          300: '#178ec2',
        },
        green: {
          100: '#54EACD',
          200: '#27E4C0',
          300: '#18C0A0',
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
