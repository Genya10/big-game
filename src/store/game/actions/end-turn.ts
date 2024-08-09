import { MAX_MANA } from "../../../constants/core.constants"
import { useNotificationStore } from "../../notification/notification.store";
import type { IGameCard, IGameStore, TPlayer } from "../game.types"
import { drawCardsAction } from "./draw-cards";

const getNewMana = ( currentTurn: number) => {

  return Math.min(currentTurn, MAX_MANA)
};

const updateAttack = (deck: IGameCard[]) => {
  return deck.map(card => ({
    ...card,
    isCanAttack: card.isOnBoard,
    isPlayedThisTurn:false
  }));
};

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
  const state = get()

  const newTurn: TPlayer =
    state.currentTurn === 'player' ? "opponent" : "player";

    const isNewTurnPlayer = newTurn === 'player'
    const newTurnNumber = isNewTurnPlayer ? state.turn + 1 : state.turn

    let newPlayerMana = state.player.mana
    let newOpponentMana = state.opponent.mana

    if(isNewTurnPlayer){
        newPlayerMana = getNewMana(newTurnNumber)
        useNotificationStore.getState().show('Your Turn')  
    } else {
      newOpponentMana = getNewMana(newTurnNumber)
    }

  return {
    currentTurn: newTurn,
    player: {
      ...state.player,
      mana: newPlayerMana,
      deck: updateAttack(isNewTurnPlayer
           ? drawCardsAction(state).updatedDeck
           : state.player.deck)      
    },
    opponent: {
      ...state.opponent,
      mana: newOpponentMana,
      deck: updateAttack(!isNewTurnPlayer
            ? drawCardsAction(state).updatedDeck
            : state.opponent.deck), 
    },
    turn: newTurnNumber,
  }
};
