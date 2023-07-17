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
        "hover-blue": "#666ca3",
        "white-op": "rgba(255, 255, 255, 0.50)",
        "hov-link": "#ffa7c3",
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
        "tab-h": "4rem",
        "tab-text": "1.6rem",
        "2rem": "2rem",
      },
      lineHeight: {
        norm: "2.6rem",
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
      padding: {
        3.2: "3.2rem",
      },
      backgroundImage: {
        grad: "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)",
        "body-bg": "linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)",
      },
      screens: {
        lg: { max: "66.25em" },
        slg: { max: "56.25em" },
        mid: { max: "43.75em" },
        xsm: { max: "37.5em" },
      },
    },
  },
  plugins: [],
};
