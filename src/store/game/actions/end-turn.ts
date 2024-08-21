import { MAX_MANA } from "../../../constants/core.constants"
import { useNotificationStore } from "../../notification/notification.store"
import type { IGameCard, IGameStore, TPlayer } from "../game.types"
import { drawCardsAction } from "./draw-cards"
import { randomOpponentPlay } from "./opponent-game/random-opponent-play"

const getNewMana = ( currentTurn: number) => {

  return Math.min(currentTurn, MAX_MANA)
};

const updateAttack = (deck: IGameCard[]) => {
  return deck.map(card => ({
    ...card,
    isCanAttack: card.isOnBoard,
    isPlayedThisTurn: false
  }));
};

export const endTurnAction = (state:IGameStore): Partial<IGameStore> => {

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

   const updatedState = {
    ...state,
    currentTurn: newTurn,
    player: {
      ...state.player,
      mana: newPlayerMana,
      deck: updateAttack(state.player.deck)     
    },
    opponent: {
      ...state.opponent,
      mana: newOpponentMana,
      deck: updateAttack(state.opponent.deck)
    },
    turn: newTurnNumber,
  }
  
  if(!isNewTurnPlayer){
    updatedState.opponent = {
      ...updatedState.opponent,
      deck: drawCardsAction(updatedState.opponent)
    }
  } else {
    updatedState.player = {
      ...updatedState.player,
      deck: drawCardsAction(updatedState.player)
    }
  }
  
  return updatedState
};
