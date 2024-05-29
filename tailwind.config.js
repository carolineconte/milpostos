import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
        digib: ['"DIGIB"', 'sans-serif'],
        digiLG: ['"DIGILG"', 'sans-serif'],

      },
      colors: {
        primary: "#0E2752",
        secondary: "#316DCF",
        highlight: "#26CA6B",
        dark: "#183C52",
        light: "#F8FAFC",
        gray: "#414141",
        background: "#f1f5f9",
        cardBackground: "#FDFFFD",
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({

    })
  ],
}
