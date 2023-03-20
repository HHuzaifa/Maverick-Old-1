/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['Beth Ellen', 'cursive'],
        logoSubFont: ['Squada One', 'cursive'],
        buttonFont: ['Mukta', 'sans-serif'],
        HeadingFont: ['Raleway', 'sans-serif'],
        ParagraphFont: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}