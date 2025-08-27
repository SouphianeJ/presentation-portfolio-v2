import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f8",
          100: "#eeeff1",
          200: "#d9dbe0",
          300: "#b9bcc5",
          400: "#8a90a0",
          500: "#61697a",
          600: "#474e5d",
          700: "#363c48",
          800: "#2b3038",
          900: "#1f232a",
          950: "#15181d"
        },
        mustard: "#C9A227",
        mint: "#8AC6A6",
        beige: "#FAF7F1"
      },
      borderRadius: {
        pill: "999px"
      },
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: [animate]
};
export default config;
