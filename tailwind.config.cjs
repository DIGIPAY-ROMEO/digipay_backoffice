/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eb2426",
          secondary: "#33eab0",
          accent: "#74f7a8",
          neutral: "#1C2226",
          "base-100": "#F4F4F6",
          info: "#85A5D6",
          success: "#1EB395",
          warning: "#F99634",
          error: "#EB4D2D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

module.exports = config;
