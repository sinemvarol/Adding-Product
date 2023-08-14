/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
       colors :{
        primary:"#EA5455",
        secondary:"#7D0633",
        thirdy:"#FFD4D4",
        fourth:"#FFB84C",
        danger: "#ff0000",
        success: "#1B9C85",
       },

       fontFamily :{
        BreeSerif:["Bree Serif", "serif"],
        Dansing:["Dancing Script", "cursive"]
       }
    },
  },
  plugins: [],
}
