/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0A0A0D',
          surface: '#111217',
          raised: '#16171E',
          border: 'rgba(255,255,255,0.08)',
          borderHover: 'rgba(255,255,255,0.16)',
        },
        ink: {
          DEFAULT: '#F4F4F6',
          soft: '#A3A6B0',
          faint: '#6B6E78',
        },
        accent: {
          DEFAULT: '#6C6CF0',
          hover: '#5A5AE0',
          soft: 'rgba(108,108,240,0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
      borderRadius: {
        card: '16px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
