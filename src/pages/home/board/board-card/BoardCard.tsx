import { motion } from "framer-motion"
import cn from 'clsx'
import type { IGameCard } from "../../../../store/game/game.types"
import { useGameStore } from "../../../../store/game/game.store"
import { useEnemyTarget } from "./useEnemyTarget"
import { useSelectAttacker } from "../../../../store/game/select-attacker"

interface IProps {
  card: IGameCard
  isPlayerSide: boolean
}

export function BoardCard({ card, isPlayerSide}: IProps) {
  const {handleSelectTarget} = useEnemyTarget()
  const {returnCard} = useGameStore()
  const {setCardAttackerId} = useSelectAttacker()

  const handleClick = (cardId:number)=> {
    if(isPlayerSide){
      card.isCanAttack 
      ? () => setCardAttackerId(cardId)
      : () => returnCard(card.id)
    }else{
      handleSelectTarget(cardId)
    }
  }

  return (
    <motion.button
      className={cn("h-56 w-40 rounded-2xl shadow-2xl", {
       
       'cursor-pointer border-2 border-solid border-green-700': card.isCanAttack
      })}
      initial={{ scale: 0.7, rotate: -20, y: -100, x: -30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, y: 0, x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 30, mass: 2 }}
      onClick={()=>handleClick(card.id)}
    >
      <img alt={card.name} src={card.imageUrl} draggable="false" />
    </motion.button>
  );
}
