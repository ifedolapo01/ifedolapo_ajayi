import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * TEARDOWN — the design system.
 *
 * Two inks on paper. Every token below maps to a CSS custom property in
 * index.css so that "Paper" and "Ink" modes are a single attribute swap
 * rather than a second set of utility classes scattered through the markup.
 */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem" },
    extend: {
      colors: {
        paper: "hsl(var(--paper) / <alpha-value>)",
        "paper-deep": "hsl(var(--paper-deep) / <alpha-value>)",
        "paper-raised": "hsl(var(--paper-raised) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        graphite: "hsl(var(--graphite) / <alpha-value>)",
        vermilion: "hsl(var(--vermilion) / <alpha-value>)",
        rule: "hsl(var(--rule) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Technical labels: small, wide, uppercase. One size, used everywhere.
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.14em" }],
        "label-sm": ["0.625rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      maxWidth: { measure: "34rem", sheet: "88rem" },
      transitionTimingFunction: {
        // One easing curve for the whole site. Decisive out, no bounce.
        sheet: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "draw-in": { from: { strokeDashoffset: "100" }, to: { strokeDashoffset: "0" } },
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "draw-in": "draw-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "accordion-down": "accordion-down 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-up": "accordion-up 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
