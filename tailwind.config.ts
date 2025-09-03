// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "himetal-blue": "#123B5C",
        "himetal-light": "#2B5679",
        "himetal-celeste": "#8ABAD3",
        "himetal-gray": "#EEF3F7"
      }
    }
  },
  plugins: []
};
export default config;
