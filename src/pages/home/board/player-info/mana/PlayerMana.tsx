import { Badge } from "../../../../../components/ui/Badge";
import cn from "clsx";

interface IProps {
  currentMana: number;
  maxMana: number;
}

export function PlayerMana({ currentMana, maxMana }: IProps) {
  return (
    <div className="flex items-center absolute right-5 -bottom-3">
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
