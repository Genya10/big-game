import { useGameStore } from "../../../store/game/game.store";
import { PlayerInfo } from "./PlayerInfo";
import { HandCard } from "./HandCard";

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();

  return (
    
      <div className="relative w-full grid grid-rows-2 ">
        <section className=" pt-28">
          <div>

        <PlayerInfo player={opponent} type="opponent" />

        <div className="absolute w-full -top-20">
          <div className="flex items-center justify-center ">
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
      </div>

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
        </section>

        <hr />

        <section className="pb-8 -mt-28">
        <div className="h-56 flex items-center justify-center">
          {player.deck
            .filter((card) => card.isOnBoard)
            .map((card) => (
              <button
                className="h-56 w-40 shadow rounded-2xl mb-60"
                key={card.id}
              >
                <img alt={card.name} src={card.imageUrl} draggable="false" />
              </button>
            ))}
        </div>

      <PlayerInfo player={player} type="player" />

      <div className="absolute -bottom-12  w-full">
        <div className="flex items-center justify-center">
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
      </section>
    </div>
  );
}
