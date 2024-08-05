import { motion } from "framer-motion"
import { useNotificationStore } from "../../../store/notification/notification.store"
import cn from 'clsx'

export function Notification() {
  const {message, type} = useNotificationStore()

  //if(!message) return null
  return (
    !!message && (
    <motion.div 
                className="fixed z-50 w-full h-full left-0 top-0 flex
                items-center justify-center bg-[#102a27]/80"
                initial={{opacity: 0, zoom: 0.5 }}
                animate={{opacity: 1, zoom: 1 }}
                transition={{ type: "keyframes", stiffness: 150, damping: 30, mass: 2 }}
     >
      <div
        className={cn("rounded-lg py-2 px-4 mx-auto w-max font-semibold text-xl",{
                   'bg-gradient-to-t from-green-400 to-green-700': type === 'win',
                   'bg-gradient-to-t from-red-500 to-red-700': type === 'lose',
                   'secondary-gradient text-white ': type === 'info'
                   })}
      >
        {message}
      </div>
    </motion.div>
   )
  );
}
