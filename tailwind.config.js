/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat Nova"'],
        roboto: "Roboto",
      },
      textColor: {
        custom1: "#0ba",
        custom2: "#606e7c",
      },
    },
  },
  plugins: [require("daisyui")],
};

