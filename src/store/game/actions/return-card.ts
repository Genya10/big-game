import type { IGameStore } from "../game.types"

export const returnCardAction = (state:IGameStore, cardId: number):
  Partial<IGameStore>=> {
  const currentPlayer = state.isPlayerTurn ? state.player : state.opponent       
  const currentCard = currentPlayer.deck.find(card => card.id === cardId)

  if(currentCard && currentCard.isOnBoard){
    currentCard.isOnBoard = false
    currentCard.isOnHand = true
    currentPlayer.mana += currentCard.mana
  }

  return state.isPlayerTurn ? 
            { player : currentPlayer } : 
            { opponent : currentPlayer }
}