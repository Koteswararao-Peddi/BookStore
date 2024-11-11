/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1182c5",
        secondary: "#2aa6df",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

