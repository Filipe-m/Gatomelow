/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-black': '#030000',
        'main-color': '#ce963d',
        'secundary-color': '#f6dea4'
      },
      fontFamily: {
        Tittle: 'Amatic SC',
        ProductName: 'Montserrat'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
