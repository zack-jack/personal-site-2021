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
      'gray-600': theme('colors.gray.600'),
      'gray-700': theme('colors.gray.700'),
      'gray-800': theme('colors.gray.800'),
      primary: theme('colors.primary'),
      secondary: theme('colors.secondary'),
      tertiary: theme('colors.tertiary'),
    }),
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        primary: '#0051D9',
        secondary: '#00C0DA',
        tertiary: '#3A0CA3',
        error: '#EF4444',
      },
      fontFamily: {
        heading: ['Poppins, Helvetica, Arial, sans-serif'],
        body: ['Open Sans, Helvetica, Arial, sans-serif'],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
