import { motion } from "framer-motion"
import { useNotificationStore } from "../../../store/notification/notification.store"
import cn from 'clsx'

export function Notification() {
  const {message, type} = useNotificationStore()

  //if(!message) return null
  return (
    !!message && (
    <div className="fixed z-50 w-full left-0 top-0">
      <motion.div
        className={cn("rounded-lg py-2 px-4 mx-auto w-max font-semibold text-xl",{
                   'bg-gradient-to-t from-green-400 to-green-700': type === 'win',
                   'bg-gradient-to-t from-red-500 to-red-700': type === 'lose',
                   'secondary-gradient text-white ': type === 'info'
                   })}
        initial={{ y: -100, x: -30, opacity: 0 }}
        animate={{ y: 30, x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 30, mass: 2 }}
      >
        {message}
      </motion.div>
    </div>
   )
  );
}
