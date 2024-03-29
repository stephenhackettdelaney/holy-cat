import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(/public/holy_cat_frame.png)"
      },
      colors: {
        brown: {
          DEFAULT: "#49262A"
        },
        grey: {
          DEFAULT: "#EAE7E7"
        }
      }
    },
  },
  plugins: [],
} satisfies Config

