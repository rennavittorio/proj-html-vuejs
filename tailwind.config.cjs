/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'orange': '#FF4D00',
      'grey': '#3A3A3F',
      'lightfrey': '#9C9894',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },


    extend: {},

  },
  plugins: [],
}
