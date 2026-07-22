import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 120);
      mouseY.set(e.clientY - 120);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="fixed top-0 left-0 w-60 h-60 rounded-full pointer-events-none z-0"
    >
      <div
        className="w-full h-full rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(244,143,177,.45) 0%, rgba(192,132,252,.25) 55%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}

export default CursorGlow;