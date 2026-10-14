import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-muted": "hsl(var(--surface-muted) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        ink: "#0B1020",
        gold: "#C8A45D",
        sky: "#4DA8DA",
        paper: "#F5F5F5",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(200, 164, 93, 0.1), 0 24px 80px -24px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(169,178,195,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(169,178,195,0.07) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Iowan Old Style", "Baskerville", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
