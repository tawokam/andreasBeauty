/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          gold: '#D4AF37',
          'gold-dark': '#C5962C',
          'gold-light': '#E8C547',
          cream: '#FFF8F0',
          dark: '#0A0A0A',
        },
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }