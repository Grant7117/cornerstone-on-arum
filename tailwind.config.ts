import type { Config } from "tailwindcss"

const config: Config = {
  // 1. Ensure dark mode is handled via class
  darkMode: ["class"],
  // 2. Define exactly where Tailwind should look for classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 3. Your Custom Architectural Color Palette
      colors: {
        'deep-obsidian': '#121212', // Deep base for sections
        'warm-stone': '#E8E4E1',    // Sophisticated light text/backgrounds
        'muted-bronze': '#9C846C',  // Premium accent color for CTAs and details
        'sand-drift': '#F5F2EF',    // High-key highlight
        'slate-shadow': '#2A2A2A',  // Depth for cards
        
        // Overwriting default variable mappings for consistency
        background: "#121212",
        foreground: "#E8E4E1",
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
      // 4. Premium Font Pairing
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'], // Used for Headings/Unit Numbers
        sans: ['var(--font-sans)', 'sans-serif'], // Used for Body/Technical data
      },
      // 5. Custom Effects
      backgroundImage: {
        'brushed-metal': 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(156, 132, 108, 0.3)', // Bronze glow
      },
    },
  },
  // 6. Ensure standard Tailwind animations are available
  plugins: [require("tailwindcss-animate")],
}

export default config