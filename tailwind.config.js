/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'white-glow': '0 4px 15px rgba(255, 255, 255, 0.4)',
        'black-glow': '0 4px 15px rgba(0, 0, 0, 0.5)',
        'soft': '0 0 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};