import { type IGameStore, IGameMethodsStore, IHero, TPlayer } from "./game.types"
import { createDeck } from "./create-deck"

 const initialPlayerData: IHero = {
    deck: createDeck(),
    health: 25,
    mana: 10,
  };
  
 export const initialGameData:Omit<
  IGameStore,
  keyof IGameMethodsStore> = {
    player: initialPlayerData,
    opponent: initialPlayerData,
    currentTurn: "player" ,//as TPlayer
    isGameOver: false,
    isGameStarted: true,
    turn:1
  };