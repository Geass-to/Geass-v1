import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

export default {
  content: ["./src/**/*.tsx", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans]
      },
      background: {
        "glass-gradient": "linear-gradient(90deg, #161618 0%, #000000 17%, #1A1A1D 100%)"
      },
      boxShadow: {
        "glass-shadow": "inset 0 2px 4px rgba(255, 255, 255, 0.16);"
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config;
