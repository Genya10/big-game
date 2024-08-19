import type { IGameStore } from "../../game.types";
import random from "lodash/random";
import { playCardAction } from "../play-card";

export const playRandomCard = (
  state: IGameStore,
  mana: number
): Partial<IGameStore> => {
  const playableCards = state.opponent.deck.filter(
    (card) => !card.isOnBoard && card.isOnHand && card.mana <= mana
  );

  if (playableCards.length === 0) return state;

  const randomCard = playableCards[random(playableCards.length)];

  return playCardAction(state, randomCard.id);
}
