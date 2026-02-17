
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        "bg-elevated": "#1A1A1A",
        "bg-card": "#1A1A1A",
        border: "#2A2A2A",
        "border-subtle": "#2A2A2A",
        gold: "#C9A84C",
        "gold-dim": "#8C7335",
        "gold-bright": "#E0C060",
        "text-primary": "#E8E4DC",
        "text-secondary": "#8A8A8A",
        "text-muted": "#5A5A5A",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        mono: ['"DM Mono"', "monospace"],
      },
    },
  },
  plugins: [],
}
