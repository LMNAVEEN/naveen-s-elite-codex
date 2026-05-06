import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Intro() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const letters = "NAVEEN L M".split("");
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-[#0d0d10]"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <motion.div
            className="absolute left-0 right-0 top-1/2 mx-auto h-px"
            style={{ background: "linear-gradient(90deg, transparent, #e8394a, transparent)", boxShadow: "0 0 20px #e8394a" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight flex gap-1 md:gap-2 relative">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ textShadow: "0 0 20px rgba(232,57,74,0.6)" }}
              >
                {l === " " ? "\u00A0" : l}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
