import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#09090b",
          secondary: "#0f0f12",
          card: "#18181b",
          "card-hover": "#1f1f23",
        },
        foreground: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
        accent: {
          primary: "#3b82f6",
          secondary: "#8b5cf6",
          green: "#10b981",
          orange: "#f97316",
        },
        border: {
          DEFAULT: "#27272a",
          light: "#3f3f46",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        pulse: "pulse 2s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 0 8px rgba(16, 185, 129, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
