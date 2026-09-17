import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ratatouille: {
          dark: "#120806",
          mahogany: "#1C0D0A",
          copper: "#D97736",
          copperGlow: "#F48D46",
          amber: "#FFAA2B",
          parchment: "#F6EDE0",
          basil: "#3B724C",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
