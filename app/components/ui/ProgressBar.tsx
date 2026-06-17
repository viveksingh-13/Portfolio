"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  value: number;
  accent?: string;
  delay?: number;
};

export function ProgressBar({
  value,
  accent = "from-violet-500 to-sky-400",
  delay = 0,
}: ProgressBarProps) {
  return (
    <div className="h-1 overflow-hidden rounded-full bg-white/5">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${accent}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      />
    </div>
  );
}
