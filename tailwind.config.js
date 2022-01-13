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
          200: '#332672',
          300: '#22194C',
        },
        red: '#E5274C',
      },
      fontFamily: {
        heading: ['Poppins, Helvetica, Arial, sans-serif'],
        body: ['Inter, Helvetica, Arial, sans-serif'],
      },
      screens: {
        375: '375px',
        481: '481px',
        768: '768px',
        1024: '1024px',
        1280: '1280px',
        1440: '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
