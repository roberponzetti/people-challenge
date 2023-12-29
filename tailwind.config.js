/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      'yellow-star-wars': '#ffe919',
      'dark-yellow-star-wars': '#f8d300',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}