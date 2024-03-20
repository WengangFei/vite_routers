/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        michroma: ['Michroma', 'sans-serif'],
        germania:['Germania One','sans-serif']
      },
      colors:{
        'slate': '#94a3b8',
      }
    },
  
  },
  plugins: [],
}


