const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fill: (theme) => ({
      white: theme('colors.white'),
      'slate-800': theme('colors.slate.800'),
      'blue-100': theme('colors.blue.100'),
      'blue-200': theme('colors.blue.200'),
    }),
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        blue: {
          ...colors.blue,
          100: '#4F3DFF',
          200: '#3824ff',
        },
        violet: {
          ...colors.violet,
          100: '#9FA5F6',
          200: '#65669F',
          300: '#484764',
          400: '#0C0A1F',
        },
      },
      fontFamily: {
        heading: ['Poppins, Helvetica, Arial, sans-serif'],
        body: ['Source Sans Pro, Helvetica, Arial, sans-serif'],
      },
      screens: {
        sm: '375px',
        smd: '481px', // schmedium
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
