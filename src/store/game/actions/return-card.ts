import type { IGameStore } from "../game.types"

export const returnCardAction = (state:IGameStore, cardId: number):
  Partial<IGameStore>=> {
  //const isPlayerTurn = state.currentTurn = 'player'
  const currentPlayer = state.currentTurn === 'player' ? state.player : state.opponent       
  const currentCard = currentPlayer.deck.find(card => card.id === cardId)

  if(currentCard && currentCard.isOnBoard){
    currentCard.isOnBoard = false
    currentCard.isOnHand = true
    currentPlayer.mana += currentCard.mana
  }

  return state.currentTurn === 'player' 
           ? { player : currentPlayer }  
           : { opponent : currentPlayer }
}