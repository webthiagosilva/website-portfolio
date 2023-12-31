/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {         
          100: 'rgb(243 244 246)', // gray-100
          200: '#B35000', // azul claro
          300: 'rgb(51,51,51)', // azul escuro
          400: 'rgb(18,18,18)' // gray-400
        },
        website: {
          100: 'rgb(243 244 246)', // gray-100
          200: '#0077CC', // laranja
          300: '#003366', // preto claro
          400: 'rgb(156 163 175)' // preto escuro
        }
      }
    }
  },
  plugins: [],
}
