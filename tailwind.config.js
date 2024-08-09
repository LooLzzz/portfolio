/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffd700",
        secondary: "#ffd700",

        "bg-primary": "#0f172a",

        "text-primary": "rgba(255, 255, 255, 0.7)",
        "text-secondary": "rgba(255, 255, 255, 0.9)",
        "text-heading": "rgba(255, 255, 255, 0.9)",
      }
    },
  },
  plugins: [],
}