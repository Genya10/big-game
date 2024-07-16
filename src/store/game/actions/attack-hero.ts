import { EnumTypeCard } from "../../../types/card.types";
import { IGameStore } from "../game.types";
import { getCardById } from "./attack-card";

export const attackHeroAction = (
    state: IGameStore, 
    attackerId: number
):Partial<IGameStore> => {
    // Определяем, чей сейчас ход (игрока или противника)
    const isAttackerPlayer = state.currentTurn = 'player'
    // Определяем, кто является противником в текущем ходе
    // Если ход игрока, противник - opponent, иначе - player
    const opponent = state[isAttackerPlayer ? 'opponent' : 'player']
    
    // Получаем атакующую карту из колоды атакующего
    // Если ход игрока, ищем в колоде игрока, иначе - в колоде противника
    const attacker = getCardById(
        attackerId,
        isAttackerPlayer ? state.opponent.deck : state.player.deck
    )

    const opponentTaunt = opponent.deck.find(
        card => card.type === EnumTypeCard.taunt)
    //Если атакующая карта существует,может атаковать и нет карты "таунт" у противника    
        if(attacker && attacker.isCanAttack && !opponentTaunt){
    // Уменьшаем здоровье противника на величину атаки атакующей карты
         opponent.health -= attacker.attack
    // Устанавливаем флаг, чтобы карта не могла атаковать повторно в этом ходу
         attacker.isCanAttack = false
    // Проверяем, закончилось ли здоровье противника
         if(opponent.health <= 0){
    // Если здоровье противника <= 0, игра заканчивается
            state.isGameOver = true 
         }
        }

     // Возвращаем обновленное состояние игрока, противника и статус игры
    return { player: state.player, 
             opponent: state.opponent, 
             isGameOver:state.isGameOver
        }
}