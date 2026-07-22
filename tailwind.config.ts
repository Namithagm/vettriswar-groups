import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B8860B",
          light: "#E8CD6B",
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          soft: "rgb(var(--color-ink-soft) / <alpha-value>)",
          raised: "rgb(var(--color-ink-raised) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--color-paper) / <alpha-value>)",
          muted: "rgb(var(--color-paper-muted) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(212, 175, 55, 0.45)",
        "gold-sm": "0 0 20px -6px rgba(212, 175, 55, 0.5)",
        "inner-gold": "inset 0 0 0 1px rgba(212, 175, 55, 0.25)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8CD6B 0%, #D4AF37 45%, #B8860B 100%)",
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.14), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgba(212,175,55,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-out infinite",
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
