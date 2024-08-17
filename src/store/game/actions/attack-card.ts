import { IGameCard, IGameStore } from "../game.types";

export const getCardById = (cardId: string, deck: IGameCard[]) =>
  deck.find((card) => card.id === cardId);

export const attackCardAction = (
  state: IGameStore,
  attackerId: string,
  targetId: string
) => {
  const isAttackerPlayer = state.currentTurn === 'player';

  const attacker = getCardById(
    attackerId,
    isAttackerPlayer ? state.player.deck : state.opponent.deck
  );

  const target = getCardById(
    targetId,
    isAttackerPlayer ? state.opponent.deck : state.player.deck
  );

  // Проверяем, что attacker и target существуют и attacker может атаковать
  if (attacker && target && attacker.isCanAttack) {
    // Выполняем атаку: уменьшаем здоровье цели на значение атаки атакующего
    target.health -= attacker.attack;
    // После атаки атакующий больше не может атаковать
    attacker.isCanAttack = false;

    // Проверяем, осталось ли здоровье у цели
    if (target.health <= 0) {
      // Если здоровье цели меньше или равно 0, удаляем её из колоды противника или игрока
      if (isAttackerPlayer) {
        state.opponent.deck = state.opponent.deck.filter(
          (card) => card.id !== targetId
        );
      } else {
        state.player.deck = state.player.deck.filter(
          (card) => card.id !== targetId
        );
      }
    }
  }

  return { player: state.player, opponent: state.opponent };
};
