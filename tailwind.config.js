/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        background: "#fafafa",
        borderColor: "#d9d9d9",
        subtitle: "#6a6a6a",
        textColor: "#1c1b1b",
      },
    },
  },
  plugins: [],
};
