import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
}

function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: "var(--background)",
          }}
        >
          <div className="text-center">

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6 }}
              className="text-6xl font-bold"
              style={{
                color: "var(--heading)",
              }}
            >
              Charlotte
              <span className="text-pink-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: .3,
              }}
              className="mt-4 text-lg"
              style={{
                color: "var(--text)",
              }}
            >
              Aspiring Full Stack Developer
            </motion.p>

            <motion.div
              className="flex justify-center gap-3 mt-10"
            >
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="w-4 h-4 rounded-full bg-pink-500"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [.4, 1, .4],
                  }}
                  transition={{
                    duration: .8,
                    repeat: Infinity,
                    delay: dot * .2,
                  }}
                />
              ))}
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;