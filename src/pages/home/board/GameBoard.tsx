import { useGameStore } from "../../../store/game/game.store";
import { PlayerInfo } from "./PlayerInfo";
import { HandCard } from "./HandCard";

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();

  return (
    <div>
      <div className="relative w-full">

        <PlayerInfo player={opponent} type="opponent" />

        <div className="flex items-center justify-center -mt-5">
          {opponent.deck
            .filter((card) => !card.isOnBoard)
            .slice(0, 6)
            .map((card, index, array) => (
              <HandCard
                card={card}
                arrayLength={array.length}
                index={index}
                key={card.id}
                onClick={() => playCard(card.id)}
                isHided
              />
            ))}
        </div>
      </div>

      <section>
        <div className="h-56">
          {opponent.deck
            .filter((card) => card.isOnBoard)
            .map((card) => (
              <button
                className="h-56 w-40 shadow inline-block mx-1 rounded-2xl"
                key={card.id}
              >
                <img alt={card.name} src={card.imageUrl} draggable="false" />
              </button>
            ))}
        </div>

        <hr />

        <div className="h-56">
          {player.deck
            .filter((card) => card.isOnBoard)
            .map((card) => (
              <button
                className="h-56 w-40 shadow inline-block mx-1 rounded-2xl"
                key={card.id}
              >
                <img alt={card.name} src={card.imageUrl} draggable="false" />
              </button>
            ))}
        </div>
      </section>

      <PlayerInfo player={player} type="player" />

      <div className="-bottom-32 relative flex items-center justify-center">
        {player.deck
          .filter((card) => !card.isOnBoard)
          .slice(0, 6)
          .map((card, index, array) => (
            <HandCard
              card={card}
              arrayLength={array.length}
              index={index}
              key={card.id}
              onClick={() => playCard(card.id)}
            />
          ))}
      </div>
    </div>
  );
}
