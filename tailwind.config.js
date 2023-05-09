/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        
        'main':'#343434',
        'gray-main':'#343434'
      },
      backgroundColor:{
        'main':'#C1DCDC'
      },
      screens:{
        xs:'480px',
        xxs:'360px'
      },
      content:{
        'MainBannerBackg':'url("/Images/MainBannerBackground.webp")',
        'Claw':'url("/Images/Claw.webp")',
      },
      boxShadow:{
        'Category':'0px 8px 23px rgba(80, 107, 82, 0.13)'
      },
      fontFamily:{
        'Unna':['Unna','serif']
      }
    },
  },
  plugins: [],
}
