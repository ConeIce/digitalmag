/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};

