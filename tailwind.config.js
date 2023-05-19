/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#0c99bc",
      },
    },
    fontFamily: {
      'marcellus': ['"Marcellus"', 'serif'],
    },
    daisyui: {
      themes: ["dark"],
    },

  },
  plugins: [require("daisyui")],
};
