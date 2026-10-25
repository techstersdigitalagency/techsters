/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: { bg: '#060912', pink: '#ff2e63', vio: '#7c3cff', mint: '#2dffb3', blue: '#3d7bff' } },
      fontFamily: { display: ['Unbounded', 'sans-serif'], body: ['"Chakra Petch"', 'sans-serif'] },
    },
  },
  plugins: [],
}
