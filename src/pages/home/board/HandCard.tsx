import { ICard } from "../../../types/card.types"
import { CSSProperties } from "react"
import cn from "clsx"
import { motion } from 'framer-motion'
import { getStyleRotation } from "./hand-card/get-style-rotation"

interface IProps {
  card: ICard
  onClick: () => void
  isDisabled?: boolean
  isHided?: boolean
  style?: CSSProperties
  index: number
  arrayLength: number
}

export function HandCard({card, onClick, isDisabled, isHided, style, 
  index, arrayLength}: IProps) {

  return (
    <motion.button
      className={cn("h-40 w-28 shadow inline-block -ml-8 rounded-2xl", {
        "opacity-60": isDisabled,
      })}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      {...getStyleRotation(index, arrayLength, !isHided)}
    >     
     <img src={isHided ? '/assets/heroes/cover.jpg' : card.imageUrl} 
          alt={card.name} 
          draggable="false" />         
    </motion.button>
  );
}
