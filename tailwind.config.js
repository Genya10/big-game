/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/constants/color.constants'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
}

