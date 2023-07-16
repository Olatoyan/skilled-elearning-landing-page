/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "#13183f",
        orange: "#ff6f48",
        pink: "#f02aa6",
        "light-pink": "#f74780",
        "light-grey": "#83869a",
        blue: "#4851ff",
      },
      borderRadius: {
        norm: "2.8rem",
      },
      maxWidth: {
        def: "144rem",
      },
      fontSize: {
        primary: "5.6rem",
        sec: "3.2rem",
        "sec-text": "1.8rem",
        "text-hd": "2.4rem",
      },
      lineHeight: {
        norm: "2.8rem",
        def: "normal",
        sec: "4rem",
      },
      fontWeight: {
        500: "500",
        700: "700",
        800: "800",
      },
      margin: {
        "neg-mg-r": "-35rem",
        "neg-mg-t": "-21rem",
      },
      boxShadow: {
        "box-sh": "0 2.5rem 5rem 0 rgba(6, 22, 141, 0.04)",
      },
    },
  },
  plugins: [],
};
