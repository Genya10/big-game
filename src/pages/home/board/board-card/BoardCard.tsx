import { motion } from "framer-motion"
import cn from 'clsx'
import type { IGameCard } from "../../../../store/game/game.types"

interface IProps {
  card: IGameCard;
}

export function BoardCard({ card }: IProps) {
  return (
    <motion.button
      className={cn("h-56 w-40 rounded-2xl shadow-2xl", {
       
       'cursor-pointer border-2 border-solid border-green-700': card.isCanAttack
      })}
      initial={{ scale: 0.7, rotate: -20, y: -100, x: -30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, y: 0, x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 30, mass: 2 }}
    >
      <img alt={card.name} src={card.imageUrl} draggable="false" />
    </motion.button>
  );
}
