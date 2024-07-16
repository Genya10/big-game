import { useGameStore } from "../../../store/game/game.store"

export function GameBoard(){

    const {player, opponent} = useGameStore()
    return(
        <div>
            <div>
             <div>
                <h1>Opponent</h1>
                <p>HP:{opponent.health}</p>
                <p>Mana:{opponent.mana}</p>
             </div>
             <div>
                {opponent.deck
                .filter(card => !card.isOnBoard)
                .slice(0,6)
                .map(card=>(
                    <button className="h-56 w-40 bg-yellow-400 
                         shadow inline-block mx-1 rounded-2xl" key={card.id}>
                    </button>
                ))}
             </div>
            </div>
             <section>

             </section>
            <div>
                <h1>Player</h1>
                <p>HP:{player.health}</p>
                <p>Mana:{player.mana}</p>
            </div>

        </div>
    )
}