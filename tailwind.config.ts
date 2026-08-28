import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { digilocker: { 50: "#eff8f0", 600: "#146d4d", 900: "#143d2c" } } } },
  plugins: [],
} satisfies Config;
