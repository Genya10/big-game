import type { IHero, TPlayer } from "../../../../store/game/game.types"
import cn from 'clsx'
import { Badge } from "../../../../components/ui/Badge"
import { MAX_HAND_CARDS } from "../../../../constants/core.constants"
import { useEnemyTarget } from "../board-card/useEnemyTarget"
import { useGameStore } from "../../../../store/game/game.store"

interface IPlayer {
    player: Omit<IHero,'deck'>
    type: TPlayer
}

export function PlayerInfo({player,type}:IPlayer){
    const { handleSelectTarget } = useEnemyTarget()
    const { currentTurn } = useGameStore()
    const isPlayer = type === 'player'

    return(
      <button className={cn("absolute ",{
        'left-6 bottom-6': isPlayer,
        'right-6 top-6': !isPlayer
      })}
        disabled={isPlayer || currentTurn === 'opponent'}
        onClick={()=> handleSelectTarget(undefined, true)}>
        <img src={isPlayer 
        ? '/assets/heroes/hero.jpg'
        : '/assets/heroes/warrior.jpg'} alt={type} width={150}
         className='rounded-3xl'/>
        <div className="absolute w-full flex items-center justify-center bottom-0.5">
          <Badge value={player.health} maxValue={MAX_HAND_CARDS} color='red'/>
        </div>       
      </button>
    )
}