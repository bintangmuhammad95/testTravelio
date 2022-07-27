/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#EB1D36",
        footer: "#F2F2F2",
        error: "#DC2626",
        success: "#009A44",
        disabled: "#BDC5C0",
      },
      screens: {
        small: "350px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        bigMonitor: "1399px",
        large: "1650px",
      },
    },
  },
  plugins: [],
};
