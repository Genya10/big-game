import { MotionProps } from "framer-motion"

export const getStyleRotation = (index: number, total:number, isPlayer?: boolean)
: MotionProps => {
  const middle = (total - 1) / 2
  const rotate = (index - middle) * 10
  const distanceToMiddle = Math.abs(index - middle)
  const translateY = Math.pow(distanceToMiddle, 2) * 8

  const transform = `rotate(${
    isPlayer ? rotate : -rotate}deg)
    translateY(${isPlayer ? translateY : -translateY}px)`

  return {
     initial:{scale:1, zIndex:0, y:0, transform: 'none'},
     animate:{transform},
     whileHover:{scale:1.2, zIndex:10, y:-95},
     transition:{type:'spring', stiffness:100, damping:20}
    }
  }

