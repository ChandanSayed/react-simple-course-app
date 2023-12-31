/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C1B1B',
        secondary: '#2F80ED'
      }
    }
  },
  plugins: []
};
