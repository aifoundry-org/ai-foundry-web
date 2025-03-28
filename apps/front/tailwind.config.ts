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
        dark: '#171717',
        sand: '#F6EFE4',
        peach: '#FCCE90',
        background: "var(--orange)",
        foreground: "var(--black)",
        'text-neutral-650': '#434343'
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
