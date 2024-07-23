import { CARDS } from "../../constants/cards.constants"
import type { IGameCard } from "./game.types"

export const createDeck=(): IGameCard[]=>{
  return CARDS.map((card,index)=>({
    ...card,
    id: index + 1,
    isOnBoard: false,
    isCanAttack: false
  }))
}