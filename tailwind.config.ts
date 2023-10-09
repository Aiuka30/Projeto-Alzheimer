import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/componentes/**/*.{js,ts,jsx,tsx,mdx}'
    
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'primary': '#0d1f2d',
      'secondary': '#203a43',
      'accent': '#3f51b5',
      'light-gray': '#f4f4f4',
      'dark-gray': '#696969',
      'white': '#ffffff',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    fontFamily: {
      'body': ['Open Sans', 'sans-serif'],
      'display': ['Roboto', 'sans-serif']
    },
    extend: {
        borderRadius: {
          '4xl': '2rem'
        },
        boxShadow: {
          card: '2px 2px 6px 0px rgba(0,0,0,0.2)',
        },
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active'],
      textColor: ['active'],
    }
  },
  
  plugins: [],
}
export default config
