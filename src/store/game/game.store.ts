import { create } from "zustand";
import { createDeck } from "./create-deck";
import { IHero, TPlayer, type IGameStore } from "./game.types";
import { endTurnAction } from "./actions/end-turn";
import { playCardAction } from "./actions/play-card";
import { attackCardAction } from "./actions/attack-card";

const initialPlayerData: IHero = {
  deck: createDeck(),
  health: 25,
  mana: 1,
};

const initialGameData = {
  player: initialPlayerData,
  opponent: initialPlayerData,
  currentTurn: "player" as TPlayer,
  isGameOver: false,
};

const useGameStore = create<IGameStore>((set, get) => ({
  ...initialGameData,
  startGame: () => set(initialGameData),
  endTurn: () => set(endTurnAction(get)),
  playCard: (cardId:number) => {
    set((state)=> playCardAction(state, cardId))
  },
  attackCard: (attackerId:number, targetId: number) => {
    set(state => attackCardAction(state, attackerId, targetId))
  },
  attackHero: () => {},
}));

export { useGameStore };
