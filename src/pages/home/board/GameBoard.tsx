import { useGameStore } from "../../../store/game/game.store"
import { PlayerInfo } from "./player-info/PlayerInfo"
import { HandCard } from "./HandCard"
import { GridBoardCards } from "./board-card/GridBoardCards"
import { PlayerMana } from "./player-info/mana/PlayerMana";
import { MAX_HAND_CARDS, MAX_MANA } from "../../../constants/core.constants";

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();

  return (
    <div
      className="relative w-full grid "
      style={{
        gridTemplateRows: "1.3.4fr .1fr 1fr",
      }}
    >
      <section className="pt-28">
        <div>
          <PlayerInfo player={opponent} type="opponent" />
       

          <div className="absolute w-full -top-20">
            <div className="flex items-center justify-center ">
              {opponent.deck
                .filter((card) => !card.isOnBoard)
                .slice(0, MAX_HAND_CARDS)
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

        <GridBoardCards deck={opponent.deck}/>

      </section>

      <hr className="opacity-60"/>

      <section className="pb-12">
        
        <GridBoardCards deck={player.deck}/>

        <PlayerInfo player={player} type="player" />

        <PlayerMana currentMana={player.mana} maxMana={MAX_MANA}/>

        <div className="absolute -bottom-52  w-full">
          <div className="flex items-center justify-center">
            {player.deck
              .filter((card) => !card.isOnBoard)
              .slice(0, MAX_HAND_CARDS)
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


