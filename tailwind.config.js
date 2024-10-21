/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        navFont: '1rem',
        headerFont: '2.7rem',
        testiFont:'1.5rem',
        subFont:'1rem',
        contentFont:'0.9rem',
        contactFont:'1.875rem',
        contactFont2:'1.2rem',
        services:'1.025rem'
      },
      colors: {
        defOrange: '#ffa07a',
        defRose:' #fffafa',
        defGrey:'#333333'
      },
      lineHeight: {
        contentSpacing: '3rem',
        wordSpacing: '2rem'
      },
      spacing: {
        contentSpace: '2.2rem'
      },
    },
  },
  plugins: [],
}

