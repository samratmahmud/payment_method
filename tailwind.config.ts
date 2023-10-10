import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "200": "#F9FAFB",
          "300": "#EAECF0",
          "500": "#D0D5DD",
          "700": "#344054",
          "800": "#1D2939",
          "900": "#101828",
        },
        neutral: {"300": "#F2F4F7", "500": "#667085", "600": "#475467"},
        emerald: {"700": "#027A48"},
        indigo: {"500": "#7F56D9", "700": "#6941C6"},
        violet: {"100": "#F9F5FF", "300": "#D6BBFB", "400": "#9E77ED"},
        purple: {"800": "#53389E"},
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "1.5em"}],
      sm: ["14px", {lineHeight: "1.43em"}],
      md: ["16px", {lineHeight: "1.5em"}],
      base: ["18px", {lineHeight: "1.56em"}],
      lg: ["24px", {lineHeight: "1.33em"}],
      xl: ["30px", {lineHeight: "1.27em"}],
    },
    shadows: {
      sm: "0px 1px 2px rgba(16, 24, 40, 0.06)",
      md: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      lg: "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
    },
    fontFamily: {inter: ["'Inter'", ...fontFamily.sans]},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
