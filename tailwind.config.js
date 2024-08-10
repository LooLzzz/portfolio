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

        "text-heading": "rgba(255, 255, 255, 0.8)",
        "text-primary": "rgba(255, 255, 255, 0.6)",
        "text-secondary": "rgba(255, 255, 255, 0.8)",
      }
    },
  },
  plugins: [],
}