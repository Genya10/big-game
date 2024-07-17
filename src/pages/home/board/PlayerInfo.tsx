import type { IHero, TPlayer } from "../../../store/game/game.types"
import cn from 'clsx'

interface IPlayer {
    player: Omit<IHero,'deck'>
    type: TPlayer
}

export function PlayerInfo({player,type}:IPlayer){
    const isPlayer = type === 'player'

    return(
      <div className={cn("absolute left-5",{
        'bottom-10': isPlayer,
        'top-6': !isPlayer
      })}>
        <h1>{isPlayer ? 'Player' : 'Opponent'}</h1>
        <p>HP:{player.health}</p>
        <p>Mana:{player.mana}</p>
      </div>
    )
}