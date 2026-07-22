import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
      }}
      className="fixed top-0 left-0 right-0 h-1 bg-pink-500 z-[999]"
    />
  );
}

export default ScrollProgress;