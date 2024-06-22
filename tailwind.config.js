/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-700": "hsl(256, 26%, 20%)",
        "primary-300": "hsl(216, 30%, 68%)",
        "base-700": "hsl(270, 9%, 17%)",
        "base-500": "hsl(273, 4%, 51%)",
        "base-110": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "dm-serif": ['"DM Serif Display"', "serif"],
        karla: ['"Karla"', "sans-serif"],
      },
      backgroundImage: {
        "intro-left-mobile":
          "url('./src/images/bg-pattern-intro-left-mobile.svg')",
        "intro-right-mobile":
          "url('./src/images/bg-pattern-intro-right-mobile.svg')",
      },
    },
  },
  plugins: [
    {
      plugins: ["prettier-plugin-tailwindcss"],
    },
  ],
};
