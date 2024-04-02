/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Quicksand"', "sans-serif"],
      },
      maxWidth: {
        "100rem": "100rem",
      },
      textColor: {
        c1e2dd: "#c1e2dd", // replace with your actual color code
      },
    },
  },
  plugins: [],
};
