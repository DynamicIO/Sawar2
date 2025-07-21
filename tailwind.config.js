/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'cyber': ['Orbitron', 'monospace'],
      },
      colors: {
        neon: {
          blue: '#00ffff',
          purple: '#8b5cf6',
          pink: '#ff00ff',
          green: '#00ff00',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          border: '#333333',
        },
        light: {
          bg: '#ffffff',
          card: '#f8fafc',
          border: '#e2e8f0',
          text: '#1e293b',
          textSecondary: '#64748b',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
} 