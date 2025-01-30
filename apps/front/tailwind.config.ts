import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/litebox-lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: '#F9A03F',
        sand: '#F6EFE4',
        peach: '#F0D6AC',
        background: "var(--orange)",
        foreground: "var(--black)",
      },
      screens: {
        xs: '431px'
      }
    },
    fontSize: {
      base: '10px',
    },
    fontFamily: {
      'host-grotesk': ['Host Grotesk'],
      'dharma-gothic-e': ['dharma-gothic-e'],
      'helvetica': ['helvetica']
    },
  },
  plugins: [],
} satisfies Config;
