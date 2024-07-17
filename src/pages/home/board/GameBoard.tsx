import { useGameStore } from "../../../store/game/game.store";

export function GameBoard() {
  const { player, opponent } = useGameStore();

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
      <div>
        <div>
          <h1>Opponent</h1>
          <p>HP:{opponent.health}</p>
          <p>Mana:{opponent.mana}</p>
        </div>
        <div className="-mt-40 flex items-center justify-center">
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
              <img alt={card.name} src={card.imageUrl} />
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
              <img alt={card.name} src={card.imageUrl} />
            </button>
          ))}
          </div>
      </section>

      <div className="absolute left-3 bottom-10">
        <h1>Player</h1>
        <p>HP:{player.health}</p>
        <p>Mana:{player.mana}</p>
      </div>
      <div className="-bottom-48 relative flex items-center justify-center">
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
              ></button>
            ))}
        </div>
    </div>
  );
}
