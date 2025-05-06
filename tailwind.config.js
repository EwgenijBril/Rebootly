/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        gagalin: ['Gagalin', 'cursive'], // ab jetzt: font-gagalin
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0f0f1a",
        foreground: "#f8f8fc",
        primary: {
          DEFAULT: "#7878c6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#6a46d1",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#2a2a3c",
          foreground: "#a1a1b5",
        },
        accent: {
          DEFAULT: "#1e1e2d",
          foreground: "#f8f8fc",
        },
        popover: {
          DEFAULT: "#0f0f1a",
          foreground: "#f8f8fc",
        },
        card: {
          DEFAULT: "#0f0f1a",
          foreground: "#f8f8fc",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}