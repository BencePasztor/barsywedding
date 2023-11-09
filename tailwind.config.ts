import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("/parallax.webp")',
      },
      colors: {
        'ctext': '#130902',
        'cbg': '#ffffff',
        'primary': {
          '50': '#f9f6ed',
          '100': '#f0e7d1',
          '200': '#e2d0a6',
          '300': '#d1b173',
          '400': '#c2964d',
          '500': '#b3823f',
          '600': '#9a6734',
          '700': '#7c4d2c',
          '800': '#68402b',
          '900': '#5a3729',
          '950': '#331d15',
        },
        'secondary': {
          '50': '#f4f6f7',
          '100': '#e3e8ea',
          '200': '#c9d2d8',
          '300': '#a4b2bc',
          '400': '#778a99',
          '500': '#5c6f7e',
          '600': '#4c5a67',
          '700': '#444f5a',
          '800': '#3d444d',
          '900': '#363b43',
          '950': '#21252b',
        }
      },
    },
  },
  plugins: [],
}
export default config
