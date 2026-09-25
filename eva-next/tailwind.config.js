/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        line: "var(--line)",
        ink: { DEFAULT: "var(--ink)", 2: "var(--ink-2)" },
        link: "var(--link)",
        brand: { pink: "var(--brand-pink)", orange: "var(--brand-orange)" },
        ia: { DEFAULT: "var(--ia)", text: "var(--ia-text)", bg: "var(--ia-bg)", surface: "var(--ia-surface)" },
        ok: "var(--ok)",
        danger: "var(--danger)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-text)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      backgroundImage: {
        "gradient-brand": "var(--gradient-brand)",
        "gradient-action": "var(--gradient-action)",
        "gradient-display": "var(--gradient-display)",
      },
    },
  },
  plugins: [],
}

