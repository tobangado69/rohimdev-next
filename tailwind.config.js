/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-display": ["SF Pro Display", "system-ui", "sans-serif"],
        "sf-pro-text": ["SF Pro Text", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        "blur-in": "blurIn 1.5s ease-out forwards",
        typing: "typing 0.5s ease-out forwards",
        blink: "blink 1s infinite",
        "count-up": "countUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          to: { opacity: "1" },
        },
        slideUp: {
          to: { transform: "translateY(0)", opacity: "1" },
        },
        blurIn: {
          to: { filter: "blur(0)", opacity: "1" },
        },
        typing: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
