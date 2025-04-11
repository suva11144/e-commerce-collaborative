/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'deadpool': ['"Bangers"', 'cursive'],
          'serif': ['Merriweather', 'serif'],
          'mono': ['Menlo', 'monospace'],
        },
      },
    },
    plugins: [],
  }
  


