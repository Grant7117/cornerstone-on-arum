import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nuanced Architectural Palette
        'deep-obsidian': '#121212', // Deep, rich black
        'warm-stone': '#E8E4E1',    // Soft, warm neutral
        'sand-drift': '#F5F2EF',    // High-key highlight
        'muted-bronze': '#9C846C',  // Earthy metallic accent
        'slate-shadow': '#2A2A2A',  // Architectural depth
        
        // Overwriting default variable mappings for consistency
        background: "#F5F2EF", // Set to sand-drift as per globals.css suggestion of light bg
        foreground: "#121212", // Set to deep-obsidian
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.05)",
        ring: "#9C846C",
        
        primary: {
          DEFAULT: "#9C846C",
          foreground: "#121212",
        },
        secondary: {
          DEFAULT: "#2A2A2A",
          foreground: "#E8E4E1",
        },
        accent: {
          DEFAULT: "#E8E4E1",
          foreground: "#121212",
        },
        card: {
          DEFAULT: "rgba(18, 18, 18, 0.6)",
          foreground: "#E8E4E1",
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'], // Unit Numbers, Headlines
        sans: ['var(--font-sans)', 'sans-serif'], // Body, Data, UI
      },
      backgroundImage: {
        'brushed-metal': 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(156, 132, 108, 0.3)', // Bronze glow
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
