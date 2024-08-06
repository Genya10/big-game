import { useGameStore } from "../../../store/game/game.store"
import { PlayerInfo } from "./player-info/PlayerInfo"
import { HandCard } from "./HandCard"
import { GridBoardCards } from "./board-card/GridBoardCards"
import { PlayerMana } from "./player-info/mana/PlayerMana"
import { MAX_MANA } from "../../../constants/core.constants"
import { AudioPlayer } from "./audio-player/AudioPlayer"
import { EndTurnButton } from "./EndTurnButton"
import { SectionSide } from "./SectionSide"

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();
  
  return (
    <div
      className="relative h-screen w-full"> 
    
      <SectionSide isPlayer={false}>
        <div>
          <PlayerInfo player={opponent} type="opponent" />
          <PlayerMana 
               currentMana={opponent.mana} 
               maxMana={MAX_MANA} 
               typePlayer='opponent'/>
       
          <div className="absolute w-full -top-20">
            <div className="flex items-center justify-center ">
              {opponent.deck
                .filter(card => card.isOnHand)
                .map((card, index, array) => (
                  <HandCard
                    card={card}
                    arrayLength={array.length}
                    index={index}
                    key={card.id}
                    isHided
                  />
                ))}
            </div>
          </div>
        </div>

        <GridBoardCards deck={opponent.deck} isPlayerSide={false}/>

      </SectionSide>

    <div className="absolute top-[51%] left-0 w-full">
      <hr className="opacity-60 w-11/12"/>
      <EndTurnButton/>
    </div>
      
      <SectionSide isPlayer >
        
        <GridBoardCards deck={player.deck} isPlayerSide/>

        <PlayerInfo player={player} type="player" />

        <PlayerMana 
               currentMana={player.mana} 
               maxMana={MAX_MANA} 
               typePlayer='player'/>

               <AudioPlayer/>

        <div className="absolute -bottom-12  w-full">
          <div className="flex items-center justify-center">
            {player.deck
              .filter((card) => !card.isOnHand)
              .map((card, index, array) => (
                <HandCard
                  card={card}
                  arrayLength={array.length}
                  index={index}
                  key={card.id}
                  onClick={() => playCard(card.id)}
                  isDisabled={player.mana < card.mana}
                />
              ))}
          </div>
        </div>
      </SectionSide>
    </div>
  );
}


