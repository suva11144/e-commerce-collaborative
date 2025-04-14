/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          deadpool: ['"Bangers"', 'cursive'],
          serif: ['Merriweather', 'serif'],
          mono: ['Menlo', 'monospace'],
        },
        boxShadow: {
          'custom': '10px 4px 20px rgba(255,255,255,0.25)',
        }
      },
    },
    plugins: [],
  }
  


