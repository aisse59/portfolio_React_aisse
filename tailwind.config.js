/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#02000D', // black
        secondary: '#8C162C', // rouge
        tertiary: '#A6756A', // violet
        quaternary: '#D9BD9C' // rose
      },
    },
  },
  plugins: [],
}

