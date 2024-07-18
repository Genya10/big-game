import { ICard } from "../../../types/card.types";
import { CSSProperties } from "react";
import cn from "clsx";

interface IProps {
  card: ICard;
  onClick: () => void;
  isDisabled?: boolean;
  isHided?: boolean;
  style?: CSSProperties;
}

export function HandCard({
  card,
  onClick,
  isDisabled,
  isHided,
  style,
}: IProps) {
  return (
    <button
      className={cn("h-32 w-20 shadow inline-block -ml-2 rounded-2xl", {
        "bg-yellow-400": isHided,
        "opacity-60": isDisabled,
      })}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
    >
      <img src={card.imageUrl} alt={card.name} draggable="false" />
    </button>
  );
}
