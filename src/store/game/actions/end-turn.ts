import { MAX_MANA } from "../../../constants/core.constants";
import type { IGameCard, IGameStore, TPlayer } from "../game.types";

const getNewMana = (newTurn: TPlayer, currentMana: number) => {
  return newTurn === "player" ? Math.min(currentMana + 1, MAX_MANA) : currentMana;
};

const resetAttack = (deck: IGameCard[]) => {
  return deck.map((card) => ({
    ...card,
    isCanAttack: card.isOnBoard,
  }));
};

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
  const state = get();

  const newTurn: TPlayer =
    state.currentTurn === "player" ? "opponent" : "player";

  const newPlayerMana = getNewMana("player", state.player.mana);
  const newOpponentMana = getNewMana("opponent", state.player.mana);

  return {
    currentTurn: newTurn,
    player: {
      ...state.player,
      mana: newPlayerMana,
      deck: resetAttack(state.player.deck),
    },
    opponent: {
      ...state.player,
      mana: newOpponentMana,
      deck: resetAttack(state.player.deck),
    },
  };
};
