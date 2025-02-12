import { type Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: ["./src/**/*.tsx", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-chillax)"],
        mono: ["var(--font-satoshi)"]
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
  plugins: [
    nextui({
      layout: {
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.125rem" // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem" // text-large
        },
        radius: {
          small: "8px", // rounded-small
          medium: "12px", // rounded-medium
          large: "14px" // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px" // border-large
        }
      },
      themes: {
        dark: {
          colors: {
            primary: {
              50: "#FEEFF0",
              100: "#FCC0C4",
              200: "#F99397",
              300: "#F6636A",
              400: "#F4343D",
              500: "#EF5A63", // Default primary color
              600: "#E22A31",
              700: "#BA2226",
              800: "#93191D",
              900: "#6C1115",
              foreground: "#0C0C0C",
              DEFAULT: "#EF5A63"
            },
            secondary: {
              DEFAULT: "#C0FAFF",
              foreground: "#0C0C0C"
            },
            background: "#0C0C0C",
            foreground: "#FFFFFF"
          }
        }
      }
    })
  ]
} satisfies Config;
