import type { IHero, TPlayer } from "../../../../store/game/game.types"
import cn from 'clsx'
import { Badge } from "../../../../components/ui/Badge"
import { MAX_HP } from "../../../../constants/core.constants"
import { useEnemyTarget } from "../board-card/useEnemyTarget"
import { useGameStore } from "../../../../store/game/game.store"
import { useSelectAttacker } from "../../../../store/game/select-attacker"
import { EnumTypeCard } from "../../../../types/card.types"
import { DamageList } from "../DamageList"

interface IPlayer {
    player: Omit<IHero,'deck'>
    type: TPlayer
}

export function PlayerInfo({player,type}:IPlayer){
    const { cardAttackerId } = useSelectAttacker()
    const { handleSelectTarget } = useEnemyTarget()
    const { currentTurn, opponent } = useGameStore()
    const opponentTaunt = opponent.deck.find(
      card => card.type === EnumTypeCard.taunt && card.isOnBoard
    )
    const isPlayer = type === 'player'

    return(
      <button className={cn(`absolute z-[1] border-4 border-transparent
                            transition-colors rounded-3xl cursor-default max-md:w-32`,{
        'left-6 bottom-6 max-lg:left-2 max-lg:bottom-1': isPlayer,
        'right-6 top-6 max-lg:right-2 max-lg:top-1': !isPlayer,
        '!border-red-400 !cursor-pointer': !isPlayer && cardAttackerId && !opponentTaunt,
      })}
       disabled={isPlayer || currentTurn === 'opponent'}
       onClick={() => isPlayer ? null : handleSelectTarget(undefined, true)}
       >
        <img src={isPlayer 
        ? '/assets/heroes/hero.jpg'
        : '/assets/heroes/warrior.jpg'} alt={type} width={150}
         className='rounded-3xl'/>
        <div className="absolute w-full flex items-center justify-center bottom-0.5">
          <Badge value={player.health} maxValue={MAX_HP} color='red'/>
        </div>      
        <DamageList id={type} isRight={isPlayer}/> 
      </button>
    )
}