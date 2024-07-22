import type { IHero, TPlayer } from "../../../../store/game/game.types"
import cn from 'clsx'
import { Badge } from "../../../../components/ui/Badge"

interface IPlayer {
    player: Omit<IHero,'deck'>
    type: TPlayer
}

export function PlayerInfo({player,type}:IPlayer){
    const isPlayer = type === 'player'

    return(
      <div className={cn("absolute left-5",{
        '-bottom-20': isPlayer,
        'top-6': !isPlayer
      })}>
        <h1>{isPlayer ? 'Player' : 'Opponent'}</h1>
        <p>HP : {player.health}</p>
        <Badge value={player.health} maxValue={25} color='red'/>
        <Badge value={player.mana} maxValue={8} color='blue'/>
      </div>
    )
}