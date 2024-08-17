import { CARDS } from "../../../../constants/cards.constants"
import type { IGameCard, TPlayer } from "../../game.types"

export const createDeck=(typePlayer: TPlayer): IGameCard[]=>{
  return CARDS.map((card,index)=>({
    ...card,
    id: index + 1 + '_' + typePlayer,
    isTaken: false,
    isOnHand:false,
    isOnBoard: false,
    isCanAttack: false,
    isPlayedThisTurn: false
  }))
}