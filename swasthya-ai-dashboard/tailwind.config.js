/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: {
            900: '#0a0a0a',
            800: '#1a1a1a',
            700: '#2a2a2a',
            600: '#3a3a3a',
          }
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }