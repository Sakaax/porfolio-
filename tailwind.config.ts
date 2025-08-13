import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { coral: "#ff7a7c", blue: "#90b4c6", beige: "#e9e3db" },
      },
      borderRadius: { pill: "9999px" },
      boxShadow: {
        neu: "6px 6px 18px rgba(0,0,0,.35), -6px -6px 18px rgba(255,255,255,.05)",
      },
    },
  },
  plugins: [],
};
export default config;