"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet-400 via-sky-400 to-violet-400"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
