import { useDamageStore } from "../../../store/game/damage.store"
import { TPlayer } from "../../../store/game/game.types"
import { motion, AnimatePresence } from "framer-motion"
import cn from "clsx"

interface IProps {
    id:string | TPlayer
    isRight?: boolean
}

export function DamageList({id, isRight = true}: IProps) {
  const { damages } = useDamageStore()

  return (
    <AnimatePresence>
      {(damages[id] || []).map(({id: damageId, amount}, index) => (
        <motion.div
          key={damageId}
          initial={{ opacity: 1, y: 0, rotate: 0 }}
          animate={{ opacity: 0, y: 50 + index * 40, rotate: 15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className={cn(
            "absolute top-2 w-full text-center text-red-500 font-bold text-xl z-30",
            isRight ? "-right-[60%]" : "-left-[60%]"
          )}
        >
          -{amount}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
