/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      csm: ['Circular Std Medium', 'sans-serif'],
      csb: ['Circular Std Book', 'sans-serif'],
    },
    extend: {
      colors: {
        indigo: '#1a243a',
        blue: '#4b40ee',
        green: '#67bf6b',
        text: {
          '100': '#bdbebf',
          '200': '#999999',
          '300': '#6f7177',
        },
        offWhite: {
          '100': '#eff1f3',
          // '200': '#e6e8eb',
          '300': '#e2e4e7',
        }
      }
    },
  },
  plugins: [],
}

