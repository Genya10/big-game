import type { IGameCard } from "../../game.types"
import random from 'lodash/random'

export const playRandomCard = (deck:IGameCard[], mana: number): IGameCard | null => {
  const playableCards = deck.filter(card => 
            !card.isOnBoard && card.isOnHand && card.mana <= mana)

    if(playableCards.length === 0) return null

    const randomCard = playableCards[random(playableCards.length)]
    randomCard.isOnBoard = true
    randomCard.isPlayedThisTurn = true
    randomCard.isOnHand = false

    return randomCard
}