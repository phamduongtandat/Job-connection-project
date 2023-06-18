/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#fbbf24',
        error: '#f87171',
        success: '#22c55e',
        dark: '#334155',
        'dark-content': '#fff',
      },
    },
  },
  plugins: [],
};
