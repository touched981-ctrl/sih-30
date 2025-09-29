/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ocean-deep': '#0a1628',
        'ocean-mid': '#1e3a8a',
        'ocean-light': '#3b82f6',
        'turquoise': '#06b6d4',
        'aqua': '#22d3ee',
        'bioluminescent': '#00ffff',
        'coral': '#ff6b6b',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'bubble': 'bubble 8s linear infinite',
        'bioluminescent': 'bioluminescent 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'wave': 'wave 4s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
