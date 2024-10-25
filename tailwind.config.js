/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-1':"url('https://i.postimg.cc/zG7fhSP6/bathroom.webp')",
        'bg-2':"url('https://i.postimg.cc/xTF8pBM1/kitchen.webp')",
        'bg-3':"url('https://i.postimg.cc/SsrN6Pmq/livingroom.webp')"
      },
      fontFamily:{
        rubik: "'Rubik Wet Paint', system-ui",
        dynapuff: "'DynaPuff', system-ui"
      }
    },
  },
  plugins: [require('daisyui'),],
}

