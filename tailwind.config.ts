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
      primary: "#FF5722",     
        secondary: "rgb(245,137,13)",
        black:"rgb(87,66,112)" ,
        background:"#FDF6ED"
               
      },
    },
  },
  plugins: [],
};

export default config;
