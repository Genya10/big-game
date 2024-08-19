import type { IGameCard, IGameStore } from "../../game.types"
import { useDamageStore } from "../../damage.store"
import { EnumTypeCard } from "../../../../types/card.types";

export const attackRandomTarget = 
      (state: IGameStore, attacker: IGameCard, isAttackerPlayer: boolean ) => {
    
        const damageStore = useDamageStore.getState();

        if(!attacker.isCanAttack) return

        const tauntCard = state.player.deck.find(
          card => card.type === EnumTypeCard.taunt && card.isOnBoard
        )
        const target = 
          tauntCard || state.player.deck.find(card => card.isOnBoard) || null
}