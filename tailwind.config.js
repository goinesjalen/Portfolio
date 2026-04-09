/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        heading: ['"DM Serif Display"', 'serif'],
        body: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#f4f0e8',
        ash: '#1a1a1a',
        smoke: '#2a2a2a',
        mist: '#888888',
        gold: '#c9a84c',
        ember: '#e05c2a',
        ice: '#a8c4d4',
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
    },
  },
  plugins: [],
}
