/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111", // headings / bold text
        body: "#555555", // paragraph gray
        muted: "#888888", // secondary gray
        link: "#0077ff", // blue links
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "34rem", // ~544px reading column
      },
    },
  },
  plugins: [],
};
