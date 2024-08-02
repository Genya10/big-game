import { IGameCard } from "../../../../store/game/game.types";
import { BoardCard } from "./BoardCard";

interface IProps {
  deck: IGameCard[]
  isPlayerSide: boolean
}

export function GridBoardCards({ deck,isPlayerSide }: IProps) {

  return (
    <div className="h-56 flex items-center justify-center">
      {deck
        .filter(card => card.isOnBoard)
        .map(card => (
          <BoardCard key={card.id} card={card} isPlayerSide={isPlayerSide}/>
        ))}
    </div>
  );
}
