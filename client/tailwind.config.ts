import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "428px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
      xxl: "1696px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
};

export default config;
