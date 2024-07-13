import { create } from "zustand";
import { createDeck } from "./create-deck";
import { IHero, TPlayer, type IGameStore } from "./game.types";
import { endTurnAction } from "./actions/end-turn";

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
  playCard: () => {},
  attackCard: () => {},
  attackHero: () => {},
}));

export { useGameStore };
