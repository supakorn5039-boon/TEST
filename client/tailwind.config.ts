import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        rainbow: "rainbow 5s linear infinite",
        raintext: "rainbow 1s linear infinite",
      },
      backgroundImage: {
        "rainbow-gradient":
          "linear-gradient(45deg, #ff007f, #ff9900, #33cc33, #00b3e6, #cc66ff, #ffcc00, #ff007f)",
      },
    },
  },
  plugins: [],
};

export default config;
