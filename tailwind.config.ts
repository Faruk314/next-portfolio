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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2b6faf",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "80rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
