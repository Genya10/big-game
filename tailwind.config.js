/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/constants/color.constants'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {    
    extend: {
      colors: COLORS,
    },
  },
  plugins: [
   plugin(({addUtilities, theme})=>{
    addUtilities({
    '.primary-gradient':{
      background:`linear-gradient(90deg, 
        ${COLORS.yellow[700]}} 0%, ${COLORS.yellow[300]} 100%)`,
      }
    })
   })
  ],
}

