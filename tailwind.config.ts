import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB", // Medical Blue
          hover: "#1D4ED8", // Deep Blue
        },
        navy: "#1E3A8A", // Heading
        lightblue: "#DBEAFE",
        accent: "#60A5FA",
        ink: {
          DEFAULT: "#0F172A", // primary text
          soft: "#334155", // secondary text
          muted: "#64748B", // muted text
        },
        line: "#CBD5E1", // borders
        surface: "#F8FAFC", // background gray
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,0.06), 0 8px 24px -12px rgba(15,23,42,0.12)",
        "card-hover": "0 4px 12px rgba(15,23,42,0.08), 0 18px 40px -14px rgba(37,99,235,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
