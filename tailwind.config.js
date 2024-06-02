/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.2rem",
        screens: { xl: "1380px" },
      },
      colors: {
        primary: {
          50: "#EEF8FF",
          100: "#DEECFE",
          200: "#BAE0FF",
          300: "#78B6FF",
          400: "#E3F5FF",
          500: "#E5ECF6",
          600: "#0C6DFC",
          700: "#0D5AE8",
          800: "#1149BC",
          900: "#154193",
          950: "#4359CA",
        },
        accent: {
          50: "#F7FAFC",
          100: "#E6E8EB",
          200: "#7E868B",
          300: "#ECECEC",
          400: "#6A6A6A",
          800: "#404040",
          900:"#1C1C1C"
        },
      },
      fontFamily: {
        sans: [
            'var(--hanken)',
        ],
       
    }
    },
  },
  plugins: [],
};
