module.exports = {
  darkMode: false,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fill: (theme) => ({
      'gray-400': theme('colors.gray.400'),
      'gray-500': theme('colors.gray.500'),
      'gray-700': theme('colors.gray.700'),
      'gray-800': theme('colors.gray.800'),
      primary: theme('colors.primary'),
    }),
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        primary: '#4361EE',
        secondary: '#4CC9F0',
        tertiary: '#F72585',
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
