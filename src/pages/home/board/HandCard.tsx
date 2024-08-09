import { ICard } from "../../../types/card.types"
import { CSSProperties, useState } from "react"
import cn from "clsx"
import { getStyleRotation } from "./hand-card/get-style-rotation"
import { motion } from "framer-motion"
import { useGameStore } from "../../../store/game/game.store"

interface IProps {
  card: ICard;
  onClick?: () => void;
  isDisabled?: boolean;
  isHided?: boolean;
  style?: CSSProperties;
  index: number;
  arrayLength: number;
}

export function HandCard({
  card,
  onClick,
  isDisabled,
  isHided,
  style,
  index,
  arrayLength,
}: IProps) {
  const { currentTurn } = useGameStore()
  const [isHovered, setIsHovered] = useState(false);

  const { rotate, translateY } = getStyleRotation(index, arrayLength, !isHided);

  const isDisabledButton = isDisabled || currentTurn !== 'player' && !isHided

  console.log('HandCard rendered with values:',
          { isHided, isDisabledButton, currentTurn, card });
  return (
    <motion.button
      className={cn(
        "h-40 w-28 shadow inline-block -ml-8 rounded-2xl cursor-default",
        {
          "opacity-60": isDisabled,
          "cursor-pointer": !isHided && !isDisabledButton,
        }
      )}
      style={style}
      disabled={isDisabledButton}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1, zIndex: 0, y: 0 }}
      animate={
        isHovered && !isHided
          ? { scale: 1.2, zIndex: 10, y: -90 }
          : {
              scale: 1,
              zIndex: 0,
              y: translateY,
              rotate,
            }
      }
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      {isDisabledButton && (
        <div
          className="absolute top-0 left-0 w-full h-full z-10 rounded-lg
                      flex items-center justify-center"
        >
          <div className="w-4/5 h-4/5 bg-black/60 rounded-lg" />
        </div>
      )}
      <img
        src={isHided ? "/assets/heroes/cover.jpg" : card.imageUrl}
        alt={card.name}
        draggable="false"
        className="will-change-transform"
      />
    </motion.button>
  );
}
