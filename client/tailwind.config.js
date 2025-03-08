/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        primary: "#007bff", // Màu chính
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#212529",

        // Màu tùy chỉnh
        bgColor: "#F4F7FF",
        textColor: "#CCCCCC",
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        yellow: {
          DEFAULT: "#fcb941",
          dark: "#c96",
          accent: "#ef837b",
        },
        cyan: "#17a2b8",
        teal: "#20c997",
        gray: {
          DEFAULT: "#6c757d",
          dark: "#343a40",
        },
        dark: {
          DEFAULT: "#212529",
          primary: "#333333",
        },
      },
      boxShadow: {
        primary: "0 3px 6px rgba(51, 51, 51, 0.05)",
        item: "0 5px 15px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
});
