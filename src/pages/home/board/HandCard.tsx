import { ICard } from "../../../types/card.types"
import { CSSProperties, useState } from "react"
import cn from "clsx"
import { motion } from 'framer-motion'

interface IProps {
  card: ICard;
  onClick: () => void;
  isDisabled?: boolean;
  isHided?: boolean;
  style?: CSSProperties;
}

export function HandCard({card, onClick, isDisabled, isHided, style 
 }: IProps) {

   const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={cn("h-40 w-28 shadow inline-block -ml-8 rounded-2xl", {
        "bg-yellow-400": isHided,
        "opacity-60": isDisabled,
      })}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
      initial={{scale:1, zIndex:0, y:0 }}
      animate={isHovered ? {scale:1.2, zIndex:10, y:-10}: {
        scale:1, zIndex:0, y:0
      }}
      transition={{type:'spring', stiffness:200, damping:20}}
    >
      {!isHided && (
     <img src={card.imageUrl} alt={card.name} draggable="false" />
    )}      
    </motion.button>
  );
}
