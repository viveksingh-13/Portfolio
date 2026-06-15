"use client";

import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="glow-orb absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/10"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-orb absolute -right-24 top-1/3 h-[400px] w-[400px] rounded-full bg-sky-500/8"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-orb absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-violet-400/6"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
