/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js,html}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        allura: ['Allura', 'cursive']
      },
    },
  },
  plugins: [],
}
