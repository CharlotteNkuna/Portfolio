import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 140,
        y: position.y - 140,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 180,
      }}
      className="fixed pointer-events-none z-0"
    >
      <div
        className="w-72 h-72 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(244,143,177,.22), rgba(192,132,252,.10), transparent)",
        }}
      />
    </motion.div>
  );
}

export default CursorGlow;