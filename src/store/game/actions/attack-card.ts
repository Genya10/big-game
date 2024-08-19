import { useDamageStore } from "../damage.store";
import { IGameCard, IGameStore } from "../game.types";

export const getCardById = (cardId: string, deck: IGameCard[]) =>
  deck.find(card => card.id === cardId);

export const attackCardAction = (
  state: IGameStore,
  attackerId: string,
  targetId: string
) => {

  const attacker = getCardById(
    attackerId,
    state.player.deck
  );

  const target = getCardById(
    targetId,
    state.opponent.deck
  );

  if (attacker && target && attacker.isCanAttack) {
    target.health -= attacker.attack
    attacker.health -= target.attack
    attacker.isCanAttack = false

    useDamageStore.getState().addDamage(targetId, attacker.attack)
    useDamageStore.getState().addDamage(attackerId, target.attack)

    if (target.health <= 0) {
        state.opponent.deck = state.opponent.deck.filter(
          card => card.id !== targetId
        )
    }
    if (attacker.health <= 0) {
      state.player.deck = state.player.deck.filter(
        card => card.id !== attackerId
      )
   }
  }

  return { player: state.player, opponent: state.opponent };
};
