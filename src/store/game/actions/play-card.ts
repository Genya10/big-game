import type { IGameStore } from "../game.types";

export const playCardAction = 
    (state:IGameStore, cardId: string) => {
 
  const isPlayerTurn = state.currentTurn === 'player'

  const currentPlayer = state.currentTurn === 'player' ? state.player : state.opponent        
  const currentCard = currentPlayer.deck.find(card => card.id === cardId)

  if(currentCard && currentPlayer.mana >= currentCard?.mana){
    currentCard.isOnBoard = true
    currentCard.isPlayedThisTurn = true
    currentCard.isOnHand = false
    currentPlayer.mana -= currentCard.mana
  }

  return {
     player: isPlayerTurn ? currentPlayer : state.player,
     opponent: isPlayerTurn ? state.opponent : currentPlayer
    }
}
 
