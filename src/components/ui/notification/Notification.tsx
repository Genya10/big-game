import { motion } from "framer-motion";

interface IProps {
  children: React.ReactNode;
}

export function Notification({ children }: IProps) {
  return (
    <div className="fixed z-50 w-full left-0 top-0">
      <motion.div
        className="rounded-lg secondary-gradient text-white py-2 px-4 mx-auto w-max font-semibold text-xl"
        initial={{ y: -100, x: -30, opacity: 0 }}
        animate={{ y: 30, x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 30, mass: 2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
