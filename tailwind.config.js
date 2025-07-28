/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all Angular components
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            50: '#ffe5e5',
            100: '#ffbfbf',
            200: '#ff9999',
            300: '#ff7373',
            400: '#ff4d4d',
            500: '#ff2626',
            600: '#e60000',
            700: '#b30000',
            800: '#800000',
            900: '#4d0000',
          },
        },
        dark: {
          primary: {
            50: '#fff2e6',
            100: '#ffdbc0',
            200: '#ffc499',
            300: '#ffac73',
            400: '#ff944d',
            500: '#ff7d26',
            600: '#e66b00',
            700: '#b35300',
            800: '#803c00',
            900: '#4d2400',
          },
        },
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
