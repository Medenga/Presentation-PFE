/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ey-yellow': '#FFE600',
        'pres-grey': '#313030',
      },
      fontFamily: {
        // ICI : on remplace 'helvetica' par 'sans'
        // Comme ça, dès que tu écris 'font-sans' (ou rien du tout par défaut), 
        // c'est l'Helvetica qui s'affiche !
        sans: [
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}