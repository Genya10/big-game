import { type IGameStore, IGameMethodsStore, IHero, TPlayer } from "./game.types"

 const initialPlayerData: IHero = {
    deck: [],
    health: 25,
    mana: 1,
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