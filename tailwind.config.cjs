/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#442'
      },
      borderRadius:{
        borderRadius:'95% 4% 97% 5%/4% 94% 3% 95%',
        borderradiusHover:'4% 95% 6% 95%/95% 4% 92% 5%'
      },
      border:{
        border_:'2rem solid #442',
        borderHover:'2rem dashed #442'
      },
      backgroundImg:{
        home:'./public/image/home-bg.jpg'
      }
    },
  },
  plugins: [],
}
