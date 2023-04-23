/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blackHole: '#130813',
        burntOrange: '#F9A620',
        dreamBlue: '#50A2A7',
        luz: '#f4f9e9',
        sombra: '#c8553d'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    // screens: {
    //   'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
    //   'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
    // },
    keyframes: {
      'open-menu': {
        '0%': { transform: 'scaleY(0)' },
        '80%': { transform: 'scaleY(1.2)' },
        '100%': { transform: 'scaleY(1)' },
      },
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
    }
  },
  plugins: [],
}
