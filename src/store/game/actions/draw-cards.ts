import type { IGameCard, IGameStore } from "../game.types"
import { MAX_HAND_CARDS } from "../../../constants/core.constants"

export const drawCardAction = (state: IGameStore):Partial<IGameStore> => {
  const currentPlayer = state.currentTurn === 'player' ? state.player : state.opponent

  const cardInHands = currentPlayer.deck.filter(card => card.isOnHand).length

  const cardsNeeded = MAX_HAND_CARDS - cardInHands

  let drawnCards = 0

  const updatedDeck = currentPlayer.deck.map((card: IGameCard)=> {
    if(!card.isTaken && !card.isOnHand && drawnCards < cardsNeeded){
        drawnCards++
        return {...card, isTaken: true, isOnHand: true}
    }
    return card
  })

  currentPlayer.deck = updatedDeck

    return {player: state.player, opponent: state.opponent} 
}