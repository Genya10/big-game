import { useGameStore } from "../../../store/game/game.store"
import { PlayerInfo } from "./PlayerInfo";

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();

 const calcRotationOpponent = (index: number, total: number) => {
  const middle = (total - 1) / 2
  return -(index - middle) * 10
 }

 const calcRotation = (index: number, total: number) => {
  const middle = (total - 1) / 2
  return (index - middle) * 10 
 }

  return (
    <div>
      <div className="relative w-full">
     <PlayerInfo player={opponent} type='opponent'/>
        <div className="flex items-center justify-center -mt-5">
          {opponent.deck
            .filter(card => !card.isOnBoard)
            .slice(0, 6)
            .map((card, index, array) => (
              <button
                className="h-32 w-20 bg-yellow-400 
                         shadow inline-block -ml-2 rounded-2xl"
                style={{transform:`rotate(${calcRotationOpponent(
                  index,
                  array.length
                )}deg)`,
              }}  
                key={card.id}
                onClick={()=> playCard(card.id)}
              ></button>
            ))}
        </div>
      </div>

      <section>
        <div className="h-56">
        {opponent.deck
          .filter(card => card.isOnBoard)
          .map(card => (
            <button
              className="h-56 w-40 shadow inline-block mx-1 rounded-2xl"                                  
              key={card.id}
            >
              <img alt={card.name} src={card.imageUrl} draggable='false'/>
            </button>
          ))}
          </div>

        <hr />

        <div className="h-56">
        {player.deck
          .filter(card => card.isOnBoard)
          .map(card => (
            <button
              className="h-56 w-40 shadow inline-block mx-1 rounded-2xl"                         
              key={card.id}
            >
              <img alt={card.name} src={card.imageUrl} draggable='false'/>
            </button>
          ))}
          </div>
      </section>

    <PlayerInfo player={player} type='player'/>

      <div className="-bottom-32 relative flex items-center justify-center">
          {player.deck
            .filter(card => !card.isOnBoard)
            .slice(0, 6)
            .map((card, index, array) => (
              <button
                className="h-32 w-20 bg-yellow-500 
                         shadow inline-block -ml-2 rounded-2xl"
                style={{transform:`rotate(${calcRotation(
                  index,
                  array.length
                )}deg)`,
              }}  
                key={card.id}
                onClick={()=> playCard(card.id)}
              ></button>
            ))}
        </div>
    </div>
  );
}
