import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#07152B",
          navy: "#0A1B3B",
          navyLight: "#13274F",
          gold: "#D4A045",
          goldLight: "#F5D48B",
          goldDark: "#B88228",
          blue: "#0284C7",
          cream: "#F8F5EE",
          sand: "#FAF7F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3D088 0%, #D4A045 50%, #B88228 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #F9DE9E 0%, #E2AE52 50%, #C48E33 100%)",
        "card-overlay": "linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(7, 21, 43, 0.85) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
