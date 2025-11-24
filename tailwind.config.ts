import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#E9F1FA",
        brightBlue: "#00ABE4",
        gold: "#FFD700",
        blackNeutral: "#0A0A0A",
      },
    },
  },
  plugins: [],
};

export default config;
