/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6c63ff',     // Vivid Indigo
        secondary: '#14b8a6',   // Teal
        background: '#f5f5f5',
        dark: '#1e1e2f',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif'],
      },
      boxShadow: {
        card: '0 10px 20px rgba(108, 99, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
