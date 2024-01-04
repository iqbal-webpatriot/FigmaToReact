import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sora:[
          'var(--font-sora)'
        ],
        inter:['var(--font-inter)']
      },
      colors:{
        active:"var(--active-link)"
      },
      backgroundColor:{
        "btn-green":"var(--active-link)"
      }
    },
  },
  plugins: [],
}
export default config
