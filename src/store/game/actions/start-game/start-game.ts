import type { IGameCard, IGameStore } from "../../game.types"
import { initialGameData } from "../../initial-data"
import { createDeck } from "./create-deck"
import shuffle from 'lodash/shuffle'
import { MAX_HAND_CARDS } from "../../../../constants/core.constants"

const getStartCards = (deck: IGameCard[]): IGameCard[] => deck.map((card, index)=>({
    ...card,
    isOnHand: index < MAX_HAND_CARDS,
    isTaken: index < MAX_HAND_CARDS
}))

export const startGameAction = (): Partial<IGameStore> => {
    const deck = createDeck()

    const playerInitialDeck = shuffle(deck)
    const opponentInitialDeck = shuffle(deck)

    return {
        ...initialGameData,
        player:{
            ...initialGameData.player,
             deck: getStartCards(playerInitialDeck)
            },
        opponent:{
            ...initialGameData.opponent,
             deck: getStartCards(opponentInitialDeck)
            }
    }
}