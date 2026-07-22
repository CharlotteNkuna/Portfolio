import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

function Fade({
  children,
  delay = 0,
  direction = "up",
}: FadeProps) {
  const distance = 60;

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -distance };

      case "right":
        return { opacity: 0, x: distance };

      case "down":
        return { opacity: 0, y: -distance };

      default:
        return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Fade;