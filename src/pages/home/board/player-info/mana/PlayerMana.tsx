import { Badge } from "../../../../../components/ui/Badge";
import cn from "clsx";
import { TPlayer } from "../../../../../store/game/game.types";

interface IProps {
  currentMana: number
  maxMana: number
  typePlayer: TPlayer
}

export function PlayerMana({ currentMana, maxMana, typePlayer }: IProps) {
  const isPlayer = typePlayer === 'player'

  return (
    <div 
         className={cn("flex items-center absolute",{
          "right-6 bottom-14 max-lg:bottom-20 max-md:!bottom-24": isPlayer,
          "left-4 top-12 max-lg:top-20 max-md:!top-24": !isPlayer
         })}
         >
      <Badge value={currentMana} maxValue={maxMana} color="blue" />
      <div className="flex items-center ml-2">
        {new Array(maxMana).fill(0).map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-6 h-6 bg-gradient-to-t from-sky-900 to-sky-400 rounded-full mx-1",
              index < currentMana ? "to-sky-400" : "to-sky-900"
            )}
          />
        ))}
      </div>
    </div>
  );
}
