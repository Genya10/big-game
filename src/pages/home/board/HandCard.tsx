import { ICard } from "../../../types/card.types"
import { CSSProperties,useState } from "react"
import cn from "clsx"
import { getStyleRotation } from "./hand-card/get-style-rotation"
import { motion } from 'framer-motion'

interface IProps {
  card: ICard
  onClick?: () => void
  isDisabled?: boolean
  isHided?: boolean
  style?: CSSProperties
  index: number
  arrayLength: number
}

export function HandCard({card, onClick, isDisabled, isHided, style, 
  index, arrayLength}: IProps) {

    const [isHovered, setIsHovered] = useState(false)

    const {rotate, translateY} = getStyleRotation(index, arrayLength, !isHided)

  return (
    <motion.button
      className={cn("h-40 w-28 shadow inline-block -ml-8 rounded-2xl cursor-default", {
        "opacity-60": isDisabled,
        "cursor-pointer": !isHided && !isDisabled,
      })}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
      initial={{scale:1, zIndex:0, y:0}}
      animate={
        isHovered && !isHided
        ? {scale:1.2, zIndex:10, y:-90}
        :{
          scale:1,
          zIndex:0,
          y: translateY,
          rotate
        }
      }
      transition={{type:'spring', stiffness:200, damping:30}}
    >     
     <img src={isHided ? '/assets/heroes/cover.jpg' : card.imageUrl} 
          alt={card.name} 
          draggable="false" />         
    </motion.button>
  );
}

