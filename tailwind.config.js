/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient' : 'linear-gradient(90deg, #F472B6 0%, #8B5CF6 100%)',
        'login' : 'url(/public/login.png)'
      },
      fontFamily: {
        'inter': "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}

