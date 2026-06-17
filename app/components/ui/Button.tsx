"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const variants = {
  primary:
    "bg-foreground text-background shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(167,139,250,0.3),0_8px_32px_rgba(167,139,250,0.15)]",
  secondary:
    "glass border-border text-foreground hover:border-accent/30 hover:bg-accent-muted/50",
  ghost:
    "text-muted hover:text-foreground border-transparent hover:bg-white/[0.04]",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors sm:px-7 sm:py-3.5 ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
}
