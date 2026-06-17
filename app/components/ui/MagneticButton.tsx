"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean | string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  strength?: number;
};

const variants = {
  primary:
    "bg-foreground text-background shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(167,139,250,0.3),0_8px_32px_rgba(167,139,250,0.2)]",
  secondary:
    "glass border border-border text-foreground hover:border-accent/30 hover:bg-accent-muted/50",
  ghost:
    "text-muted hover:text-foreground border border-transparent hover:bg-white/[0.04]",
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
  onClick,
  strength = 0.25,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const downloadAttr =
    download === true
      ? "Vivek-Singh-Resume.pdf"
      : typeof download === "string"
        ? download
        : undefined;

  return (
    <motion.a
      href={href}
      onClick={onClick}
      download={downloadAttr}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors sm:px-7 sm:py-3.5 ${variants[variant]} ${className}`}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
}
