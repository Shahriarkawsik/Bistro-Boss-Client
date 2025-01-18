/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "rgb(238, 255, 37)",
        color2: "rgb(21, 21, 21)",
        "color2.5": "rgb(21, 21, 21, 0.5)",
        "color2.7": "rgba(21, 21, 21, 0.7)",
        color3: "rgb(217, 153, 4)",
        color4: "rgb(115, 115, 115)",
        color5: "rgb(31, 41, 55)",
        color6: "rgb(17, 24, 39)",
        color7: "rgb(232, 232, 232)",
        color8: "rgb(187, 133, 6)",
        color9: "rgb(243, 243, 243)",
      },
      fontFamily: {
        Cinzel: " Cinzel",
        Inter: "Inter",
      },
      fontSize: {
        32: "32px",
        40: "40px",
        45: "45px",
        50: "50px",
      },
      lineHeight: {
        39: "39px",
        43: "43px",
        48: "48px",
        61: "61px",
        59: "59px",
      },
      letterSpacing: {
        6: "6px",
      },
    },
  },
  plugins: [require("daisyui")],
};
