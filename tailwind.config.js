/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customFormShadowBg: "#F9FAFB",
        cusTomBtnHoverClr: "#E9F9F3",
        customBtnTextClr: "#00A88E",
        customGreen: "#13AF88",
        customSubmitBtnBg: "#0060AF",
      },
    },
  },
  plugins: [require("daisyui")],
};
