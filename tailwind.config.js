/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cinzel: " Cinzel",
        Inter: "Inter",
      },
    },
  },
  plugins: [require("daisyui")],
};



/*

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Shahriarkawsik/Bistro-Boss-Client.git
git push -u origin main

*/ 