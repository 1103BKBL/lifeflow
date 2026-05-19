import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f0ff",
          100: "#e0e0ff",
          200: "#c7c7ff",
          300: "#a3a3ff",
          400: "#7b7bff",
          500: "#5d5dff",
          600: "#4a4aff",
          700: "#3c39e7",
          800: "#3432bb",
          900: "#2d2b99",
        },
        secondary: {
          50: "#fef7ff",
          100: "#fce7ff",
          200: "#f9d0ff",
          300: "#f4adff",
          400: "#ed7dff",
          500: "#e44dff",
          600: "#d325f0",
          700: "#b317d2",
          800: "#9515ab",
          900: "#7c168c",
        },
        accent: "#5d5dff",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
        info: "#3b82f6",
      },
      fontFamily: {
        sans: ["PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        cardHover: "0 4px 16px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
