import type { Config } from "tailwindcss";

// Semantic tokens resolve to CSS variables holding OKLCH "L C H" triples.
// Two themes swap the variable values via [data-mode] on <html>:
//   wireframe → light grayscale (approved wireframe, kept 1:1)
//   design    → dark industrial (graphite + azure brand + amber CTA)
// <alpha-value> keeps utilities like bg-surface/85 working.
const token = (name: string) => `oklch(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        subtle: token("subtle"),
        raised: token("raised"),
        fg: token("fg"),
        muted: token("muted"),
        faint: token("faint"),
        line: token("line"),
        "line-strong": token("line-strong"),
        brand: token("brand"),
        "brand-hover": token("brand-hover"),
        "on-brand": token("on-brand"),
        cta: token("cta"),
        "cta-hover": token("cta-hover"),
        "on-cta": token("on-cta"),
      },
      fontFamily: {
        display: ["var(--ff-display)"],
        sans: ["var(--ff-sans)"],
        mono: ["var(--ff-mono)"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        lift: "var(--shadow-lift)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.7)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
