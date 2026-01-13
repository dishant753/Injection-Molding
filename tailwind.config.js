/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#13244B",
          navy2: "#1B3A78",
          red: "#E82226",
          red2: "#FF3B3F"
        },
        ui: {
          bg: "#F5F7FB",
          s1: "#FFFFFF",
          s2: "#EEF2F8",
          border: "#D5DCE5",
          text: "#0B0F14",
          muted: "#5B6676"
        }
      },
      boxShadow: {
        soft: "0 14px 40px -24px rgba(19, 36, 75, 0.45)",
        glow: "0 0 0 1px rgba(19, 36, 75, 0.25), 0 10px 30px -18px rgba(19, 36, 75, 0.35)"
      },
      borderRadius: {
        xl: "16px"
      }
    }
  },
  plugins: []
};
