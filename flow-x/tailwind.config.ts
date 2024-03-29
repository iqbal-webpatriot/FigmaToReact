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
        active:"var(--active-link)",
        "muted1":"var(--white-125)"
      },
      backgroundColor:{
        "btn-green":"var(--active-link)"
      },
      borderColor:{
        borderGreen:"var(--border-green)"
      }
    },
  },
  plugins: [],
}
export default config
