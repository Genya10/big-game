import { motion } from "framer-motion"
import cn from 'clsx'
import type { IGameCard } from "../../../../store/game/game.types"
import { useGameStore } from "../../../../store/game/game.store"
import { useEnemyTarget } from "./useEnemyTarget"
import { useSelectAttacker } from "../../../../store/game/select-attacker"
import { DamageList } from "../DamageList"

interface IProps {
  card: IGameCard
  isPlayerSide: boolean
}

export function BoardCard({ card, isPlayerSide}: IProps) {
  const {handleSelectTarget} = useEnemyTarget()
  const {returnCard, currentTurn} = useGameStore()
  const {cardAttackerId, setCardAttackerId} = useSelectAttacker()

  const handleClick = (cardId:string)=> {

    if(isPlayerSide){
     if(card.isCanAttack ) {
      setCardAttackerId(cardId)
     } else if(card.isPlayedThisTurn){
      returnCard(cardId)
     }
    } else {
      handleSelectTarget(cardId)
    }
  }
  
  const isPlayerSelectAttacker = isPlayerSide && cardAttackerId === card.id

  return (
    <motion.button
      className={cn(`h-56 w-40 max-md:h-32 max-md:w-24 rounded-2xl border-2 border-transparent
                     border-solid transition-colors relative`, 
      { 
       'cursor-pointer border-2 !border-solid border-green-700':
          card.isCanAttack && !isPlayerSelectAttacker && isPlayerSide && currentTurn === 'player',
       '!border-primary shadow-2xl': isPlayerSelectAttacker,
       '!border-red-400': !isPlayerSide && cardAttackerId, 
       'cursor-not-allowed': currentTurn !== 'player',
      }
      )}
      initial={{ scale: 0.7, rotate: -20, y: -100, x: -30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, y: 0, x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 30, mass: 2 }}
      onClick={() => currentTurn !== 'player' ? null : handleClick(card.id)}
    >
      <img alt={card.name} src={card.imageUrl} draggable="false" />
      <DamageList id={card.id} isRight/>
    </motion.button>
  );
}
