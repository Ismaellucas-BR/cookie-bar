/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // inclui todos os arquivos HTML
    "./src/**/*.js", // inclui os arquivos JS dentro da pasta src
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
