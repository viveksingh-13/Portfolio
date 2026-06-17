"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function FloatingOrbs() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="glow-orb absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-violet-600/8" />
        <div className="glow-orb absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-sky-500/6" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="glow-orb absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-violet-600/8"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-orb absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-sky-500/6"
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-orb absolute bottom-1/4 left-1/3 h-[280px] w-[280px] rounded-full bg-violet-400/5"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
