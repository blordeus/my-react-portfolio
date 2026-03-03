/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // ─── IBB Brand Colors ───────────────────────────────────────────
      colors: {
        cream: {
          DEFAULT: "#28241d",
          tint:    "#FAF9F6",
          accent:  "#EAE4DA",
        },
        slate: {
          DEFAULT: "#435066",
          light:   "#5A6477",
          dark:    "#2C3747",
          accent:  "#56637B",
        },
        pine: {
          DEFAULT: "#365349",
          tint:    "#597067",
          deep:    "#253D35",
          accent:  "#4B6A5E",
        },
        ink: {
          DEFAULT: "#2B3A42",
          light:   "#3F4F5B",
          accent:  "#364551",
          tint:    "#4A5B66",
        },
        olive: {
          DEFAULT: "#768079",
          tint:    "#A1A7A2",
          dark:    "#5A635D",
          accent:  "#8B958D",
        },
        graphite: {
          DEFAULT: "#1F1F1F",
          mid:     "#2D2D2D",
          accent:  "#3A3A3A",
          black:   "#121212",
        },
      },

      // ─── IBB Typography ─────────────────────────────────────────────
      fontFamily: {
        serif:   ["DM Serif Display", "Georgia", "serif"],
        sans:    ["DM Sans", "system-ui", "sans-serif"],
        // Canterbury is decorative — use sparingly via className
        display: ["DM Serif Display", "Georgia", "serif"],
      },

      // ─── Type Scale (matches brand book) ────────────────────────────
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        xs:    ["0.75rem",  { lineHeight: "1.125rem" }],
        sm:    ["0.875rem", { lineHeight: "1.375rem" }],
        base:  ["1rem",     { lineHeight: "1.625rem" }],
        lg:    ["1.125rem", { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.75rem" }],
        "5xl": ["3rem",     { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem",  { lineHeight: "4.25rem" }],
        "7xl": ["4.5rem",   { lineHeight: "5rem" }],
      },

      // ─── Spacing ─────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
      },

      // ─── Border Radius ───────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ─── Box Shadow ──────────────────────────────────────────────────
      boxShadow: {
        "card":    "0 2px 20px rgba(31, 31, 31, 0.08)",
        "card-md": "0 4px 32px rgba(31, 31, 31, 0.12)",
        "card-lg": "0 8px 48px rgba(31, 31, 31, 0.18)",
        "ink":     "0 4px 24px rgba(43, 58, 66, 0.25)",
        "slate":   "0 4px 24px rgba(67, 80, 102, 0.20)",
      },

      // ─── Letter Spacing ──────────────────────────────────────────────
      letterSpacing: {
        "widest-2": "0.2em",
        "widest-3": "0.3em",
      },

      // ─── Transitions ─────────────────────────────────────────────────
      transitionDuration: {
        "400": "400ms",
      },

      // ─── Background Image ────────────────────────────────────────────
      backgroundImage: {
        "gradient-ink-slate":
          "linear-gradient(135deg, #2B3A42 0%, #435066 100%)",
        "gradient-cream-slate":
          "linear-gradient(135deg, #F4F0E8 0%, #EAE4DA 100%)",
        "gradient-graphite":
          "linear-gradient(180deg, #1F1F1F 0%, #2D2D2D 100%)",
      },
    },
  },
  plugins: [],
};
