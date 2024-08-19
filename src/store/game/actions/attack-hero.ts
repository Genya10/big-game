import { EnumTypeCard } from "../../../types/card.types";
import { useNotificationStore } from "../../notification/notification.store";
import { useDamageStore } from "../damage.store";
import { IGameStore } from "../game.types";
import { getCardById } from "./attack-card";

export const attackHeroAction = (
    state: IGameStore, 
    attackerId: string
):Partial<IGameStore> => {
    const isAttackerPlayer = true
    const attacker = getCardById(
        attackerId,
        state.player.deck
    )

    const opponentTaunt = state.opponent.deck.find(
        card => card.type === EnumTypeCard.taunt && card.isOnBoard)
    
        if(attacker && attacker.isCanAttack && !opponentTaunt){
    
         state.opponent.health -= attacker.attack    
         attacker.isCanAttack = false

        useDamageStore.getState()
                      .addDamage('opponent', attacker.attack)
                        
         if(state.opponent.health <= 0){
            state.isGameOver = true 
            state.isGameStarted = false

            useNotificationStore
            .getState()
            .show(
                isAttackerPlayer ? 'You win!' : 'You lose :(',
                isAttackerPlayer ? 'win' : 'lose'
            )
         }
        }

    return { player: state.player, 
             opponent: state.opponent, 
             isGameOver:state.isGameOver,
             isGameStarted: state.isGameStarted
        }
}