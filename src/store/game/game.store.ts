import { create } from "zustand"
import { type IGameStore } from "./game.types"
import { endTurnAction } from "./actions/end-turn"
import { playCardAction } from "./actions/play-card"
import { attackCardAction } from "./actions/attack-card"
import { attackHeroAction } from "./actions/attack-hero"
import { returnCardAction } from "./actions/return-card"
import { initialGameData } from "./initial-data"
import { startGameAction } from "./actions/start-game/start-game"
import { randomOpponentPlay } from "./actions/opponent-game/random-opponent-play"

const useGameStore = create<IGameStore>(set => ({
  ...initialGameData,
  isGameStarted: false,
  startGame: () => set(startGameAction()),
  endTurn: () => {
    set(endTurnAction)
  
    setTimeout(() => {
      set(state => {
        const updateState = randomOpponentPlay(state)

        setTimeout(() => {
          set(() => endTurnAction(updateState))
      }, 2000)

      return updateState
    })
  }, 2500)
  },

  playCard: (cardId:string) => {
    set(state=> playCardAction(state, cardId))
  },
  returnCard:(cardId: string)=> {
    set(state => returnCardAction(state, cardId))
  },
  attackCard: (attackerId:string, targetId: string) => {
    set(state => attackCardAction(state, attackerId, targetId))
  },
  attackHero: (attackerId: string) => {
    set(state => attackHeroAction(state, attackerId))      
  },
}));

export { useGameStore };
