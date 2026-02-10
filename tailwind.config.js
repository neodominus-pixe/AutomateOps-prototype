/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#1a1a1a',
          800: '#222222',
          700: '#2a2a2a',
          600: '#333333',
          500: '#444444',
        },
        accent: {
          DEFAULT: '#4a9eff',
          hover: '#6ab2ff',
          dark: '#3a8eef',
        },
        muted: '#b0b0b0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
