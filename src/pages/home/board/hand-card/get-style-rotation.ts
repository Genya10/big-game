
export const getStyleRotation = (index: number, total:number, isPlayer?: boolean
 ) => {
  const middle = (total - 1) / 2
  const rotate = (index - middle) * 10
  const distanceToMiddle = Math.abs(index - middle)
  const translateY = Math.pow(distanceToMiddle, 2) * 8

  return {
    rotate:isPlayer ? rotate : -rotate,
    translateY: isPlayer ? translateY : -translateY
  }
 }



