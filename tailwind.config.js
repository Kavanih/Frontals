/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        searchGrid: "20rem 1fr",
      },
      fontFamily: {
        staatliches: "Staatliches, sans-serif",
      },
    },
  },
  plugins: [],
};
