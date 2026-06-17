"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type LetterRevealProps = {
  text: string;
  className?: string;
  letterDelay?: number;
  onComplete?: () => void;
};

export function LetterReveal({
  text,
  className = "",
  letterDelay = 0.06,
  onComplete,
}: LetterRevealProps) {
  const reducedMotion = useReducedMotion();
  const [showCursor, setShowCursor] = useState(reducedMotion);
  const letters = text.split("");

  useEffect(() => {
    if (reducedMotion) {
      setShowCursor(true);
      onComplete?.();
      return;
    }

    const totalDuration = letters.length * letterDelay * 1000 + 400;
    const timer = setTimeout(() => {
      setShowCursor(true);
      onComplete?.();
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [reducedMotion, letters.length, letterDelay, onComplete]);

  if (reducedMotion) {
    return (
      <span className={className} aria-label={text}>
        {text}
        <BlinkingCursor />
      </span>
    );
  }

  return (
    <span className={className} aria-label={text}>
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: index * letterDelay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          aria-hidden={char === " "}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {showCursor && <BlinkingCursor />}
    </span>
  );
}

function BlinkingCursor() {
  return (
    <motion.span
      className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-accent align-middle"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        times: [0, 0.49, 0.5, 1],
        ease: "linear",
      }}
      aria-hidden
    />
  );
}
