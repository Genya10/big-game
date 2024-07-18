import { CSSProperties } from "react";

export const getStyleRotation = (index: number, total:number, isPlayer?: boolean)
: CSSProperties => {
  const middle = (total - 1) / 2
  const rotate = (index - middle) * 10
  const distanceToMiddle = Math.abs(index - middle)
  const translateY = Math.pow(distanceToMiddle, 2) * 8

  return {
    transform:`rotate(${
               isPlayer ? rotate : -rotate}deg)
               translateY(${isPlayer ? translateY : -translateY}px)`,
  }
}