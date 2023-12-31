/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow': '3px 4px 4px #f8d300',
        'form-shadow': '10px 10px 15px #242424',
      }
    },
    colors: {
      'yellow-star-wars': '#ffe919',
      'dark-yellow-star-wars': '#f8d300',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}