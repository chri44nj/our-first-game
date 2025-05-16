import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{vue,js,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue", "./plugins/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--color-charcoal)",
        teal: "var(--color-teal)",
        pink: "var(--color-pink)",
        magenta: "var(--color-magenta)",
        offwhite: "var(--color-offwhite)",
        softwhite: "var(--color-softwhite)",
        lightgrey: "var(--color-lightgrey)",
        darkgrey: "var(--color-darkgrey)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
      },
    },
  },
  safelist: ["bg-charcoal", "bg-teal", "bg-pink", "bg-magenta", "bg-offwhite", "bg-success", "bg-error", "bg-warning"],
};

export default config;
