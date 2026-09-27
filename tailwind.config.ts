import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ccff00",
        base: {
          950: "#0a0b0d",
          900: "#111318",
          850: "#161920",
          800: "#1b1f27",
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        fitlog: {
          primary: "#ccff00",
          secondary: "#1b1f27",
          accent: "#ccff00",
          neutral: "#161920",
          "base-100": "#0a0b0d",
          "base-200": "#111318",
          "base-300": "#1b1f27",
          info: "#38bdf8",
          success: "#4ade80",
          warning: "#facc15",
          error: "#f87171",
        },
      },
    ],
    darkTheme: "fitlog",
  },
  plugins: [require("daisyui")],
};

export default config;
