/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        "UFD-nameplate": "#ffc640",
        "UFD-bg": "#151515",
        "UFD-Combo-bg": "#222",
        "UFD-Char-bg": "#333"
      },
      fontFamily: {
        poppins: ["Poppins" , "sans-serif"],
      },
      dropShadow: {
        xl: "1px 1px 6px #111",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

