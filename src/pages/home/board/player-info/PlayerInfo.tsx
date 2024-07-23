import type { IHero, TPlayer } from "../../../../store/game/game.types"
import cn from 'clsx'
import { Badge } from "../../../../components/ui/Badge"
import { MAX_HAND_CARDS, MAX_MANA } from "../../../../constants/core.constants"

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
        <Badge value={player.health} maxValue={MAX_HAND_CARDS} color='red'/>
        <Badge value={player.mana} maxValue={MAX_MANA} color='blue'/>
      </div>
    )
}