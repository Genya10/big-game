import { MAX_MANA } from "../../../constants/core.constants"
import { useNotificationStore } from "../../notification/notification.store";
import type { IGameCard, IGameStore, TPlayer } from "../game.types"
import { drawCardsAction } from "./draw-cards";

const getNewMana = (newTurn: TPlayer, currentTurn: number) => {
  
  return newTurn === "player" 
     ? Math.min(currentTurn, MAX_MANA) 
     : currentTurn
};

const updateAttack = (deck: IGameCard[]) => {
  return deck.map((card) => ({
    ...card,
    isCanAttack: card.isOnBoard,
    isPlayedThisTurn:false
  }));
};

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
  const state = get()

  const newTurn: TPlayer =
    state.isPlayerTurn? "opponent" : "player";

  const newPlayerMana = getNewMana("player", state.turn);
  const newOpponentMana = getNewMana("opponent", state.turn);

  if(newTurn === 'player'){
     useNotificationStore
    .getState().show('Your Turn')
  }

  return {
    currentTurn: newTurn,
    player: {
      ...state.player,
      mana: newPlayerMana,
      deck: updateAttack(newTurn === 'player' 
           ? drawCardsAction(state).updatedDeck
           : state.player.deck)      
    },
    opponent: {
      ...state.opponent,
      mana: newOpponentMana,
      deck: updateAttack(newTurn === 'opponent'
            ? drawCardsAction(state).updatedDeck
            : state.opponent.deck), 
    },
    turn: state.turn + 1,
  }
};
