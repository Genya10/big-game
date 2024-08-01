import type { IGameCard, IGameStore } from "../game.types"
import { MAX_HAND_CARDS } from "../../../constants/core.constants"

export const drawCardsAction = (state: IGameStore) => {
  const currentPlayer = state.currentTurn === 'player' ? state.player : state.opponent

  const cardInHand = currentPlayer.deck.filter(card => card.isOnHand).length

  const cardsNeeded = MAX_HAND_CARDS - cardInHand

  let drawnCards = 0

  const updatedDeck = currentPlayer.deck.map((card: IGameCard)=> {
    if(!card.isTaken && !card.isOnHand && drawnCards < cardsNeeded){
        drawnCards++
        return {...card, isTaken: true, isOnHand: true}
    }
    return card
  })

  currentPlayer.deck = updatedDeck

    return { updatedDeck }
    }
    
    /* state.currentTurn === 'player'
    ? { player: state.player } 
    : { opponent: state.opponent } */
