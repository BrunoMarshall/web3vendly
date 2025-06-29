/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all JS/JSX files
  ],
  theme: {
    extend: {
      colors: {
        'vendly-blue': '#1E3A8A',
        'vendly-accent': '#FBBF24',
      },
    },
  },
  plugins: [],
};