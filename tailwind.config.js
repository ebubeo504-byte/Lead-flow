/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1F24",
        paper: "#FAFAF9",
        surface: "#FFFFFF",
        line: "#E5E4E0",
        navy: {
          50: "#EEF2F7",
          100: "#DCE5F0",
          200: "#B9CBE0",
          300: "#8CA9C9",
          400: "#5D82AB",
          500: "#3C6188",
          600: "#2A4A6E",
          700: "#223554",
          800: "#182740",
          900: "#101B2D",
        },
        amber: {
          50: "#FDF3E3",
          100: "#FBE4BE",
          200: "#F5C783",
          300: "#EDA94D",
          400: "#E0922E",
          500: "#C97D1F",
          600: "#A8660F",
        },
        status: {
          high: "#B42318",
          highBg: "#FDECEA",
          medium: "#B54708",
          mediumBg: "#FEF3E2",
          low: "#475467",
          lowBg: "#F1F2F4",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        prose: "65ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 27, 45, 0.06), 0 1px 1px rgba(16, 27, 45, 0.04)",
        lifted: "0 12px 32px -12px rgba(16, 27, 45, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "check-in": {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "check-in": "check-in 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};
