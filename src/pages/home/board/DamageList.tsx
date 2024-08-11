import { useDamageStore } from "../../../store/game/damage.store";
import { TPlayer } from "../../../store/game/game.types";
import { motion, AnimatePresence } from "framer-motion";
import cn from "clsx";

export function DamageList(id: number | TPlayer, isRight = true) {
  const { damages } = useDamageStore();

  return (
    <AnimatePresence>
      {damages[id] > 0 && (
        <motion.div
          initial={{ opacity: 1, y: 0, rotate: 0 }}
          animate={{ opacity: 0, y: 50, rotate: 15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={cn(
            "absolute top-0 w-full text-center text-red-500 font-bold",
            isRight ? "-right-1" : "-left-1"
          )}
        >
          -{damages[id]}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
