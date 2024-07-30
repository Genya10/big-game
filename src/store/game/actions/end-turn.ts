import { MAX_MANA } from "../../../constants/core.constants";
import type { IGameCard, IGameStore, TPlayer } from "../game.types";

const getNewMana = (newTurn: TPlayer, currentTurn: number) => {
  return newTurn === "player" 
     ? Math.min(currentTurn, MAX_MANA) 
     : currentTurn
};

const resetAttack = (deck: IGameCard[]) => {
  return deck.map((card) => ({
    ...card,
    isCanAttack: card.isOnBoard,
  }));
};

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
  const state = get()

  const newTurn: TPlayer =
    state.currentTurn === "player" ? "opponent" : "player";

  const newPlayerMana = getNewMana("player", state.turn);
  const newOpponentMana = getNewMana("opponent", state.turn);

  return {
    currentTurn: newTurn,
    player: {
      ...state.player,
      mana: newPlayerMana,
      deck: resetAttack(state.player.deck),
    },
    opponent: {
      ...state.opponent,
      mana: newOpponentMana,
      deck: resetAttack(state.player.deck),
    },
    turn: state.turn + 1,
  };
};
