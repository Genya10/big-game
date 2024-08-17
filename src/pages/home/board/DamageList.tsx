import { useDamageStore } from "../../../store/game/damage.store"
import { TPlayer } from "../../../store/game/game.types"
import { motion, AnimatePresence } from "framer-motion"
import cn from "clsx"

interface IProps {
    id:string | TPlayer
    isRight?: boolean
}

export function DamageList({id, isRight = true}: IProps) {
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
            "absolute top-0 w-full text-center text-red-500 font-bold z-30",
            isRight ? "-right-[60%]" : "-left-[60%]"
          )}
        >
          -{damages[id]}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
