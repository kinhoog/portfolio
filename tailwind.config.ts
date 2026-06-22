import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
      colors: {
        ink: "#0C0C0C",
        mist: "#D7E2EA",
        metal: "#646973",
        frost: "#BBCCD7",
      },
      boxShadow: {
        "tech-glow": "0 0 80px rgba(66, 214, 255, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
