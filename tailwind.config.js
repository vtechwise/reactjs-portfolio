/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marque: "marque 25s linear infinite",
        marque2: "marque2 25s linear infinite",
      },
      keyframes: {
        marque: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marque2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
  plugins: [require("daisyui", "tw-elements-react/dist/plugin.cjs")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
