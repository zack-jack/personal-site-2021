const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: false,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fill: (theme) => ({
      'neutral-900': theme('colors.neutral.900'),
      'slate-200': theme('colors.slate.200'),
      primary: theme('colors.primary'),
    }),
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        neutral: {
          ...colors.neutral,
          850: '#212121',
        },
        primary: '#0045FA',
        secondary: '#01B3F9',
        tertiary: '#f43f5e',
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
