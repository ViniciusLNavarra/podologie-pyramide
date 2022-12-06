/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    backgroundImage: {
      'content-img': "url('/src/assets/ContentImg.jpg')",
    },
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      },
    },
  },
  plugins: [],
}
