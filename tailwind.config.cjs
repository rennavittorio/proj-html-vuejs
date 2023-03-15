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
      'lightorange': '#DD4D00',
      'dark-orange': '#DD4D00',
      'grey': '#3A3A3F',
      'lightgrey': '#9C9894',
      'bg-grey': '#f5f5f1',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },


    extend: {
      keyframes: {
        smoothchange: {
          '0%': { color: 'currentColor' },
          '120%': { color: 'orange' },
        },
      },
      animation: {
        smoothchange: 'smoothchange 350ms ease-out',
      },

    },

  },
  plugins: [],
}
