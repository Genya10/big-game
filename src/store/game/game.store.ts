import { create } from "zustand"
import { type IGameStore } from "./game.types"
import { endTurnAction } from "./actions/end-turn"
import { playCardAction } from "./actions/play-card"
import { attackCardAction } from "./actions/attack-card"
import { attackHeroAction } from "./actions/attack-hero"
import { returnCardAction } from "./actions/return-card"
import { initialGameData } from "./initial-data"
import { startGameAction } from "./actions/start-game/start-game"

const useGameStore = create<IGameStore>((set, get) => ({
  ...initialGameData,
  isGameStarted:false,
  startGame: () => set(startGameAction()),
  endTurn: () => set(endTurnAction(get)),
  playCard: (cardId:number) => {
    set(state=> playCardAction(state, cardId))
  },
  returnCard:(cardId: number)=> {
    set(state => returnCardAction(state, cardId))
  },
  attackCard: (attackerId:number, targetId: number) => {
    set(state => attackCardAction(state, attackerId, targetId))
  },
  attackHero: (attackerId: number) => {
    set(state => attackHeroAction(state, attackerId))      
  },
}));

export { useGameStore };
