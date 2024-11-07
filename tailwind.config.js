/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // inclui todos os arquivos HTML
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        DP: "#1b4a7e",
      },
    },
  },
  plugins: [],
};
