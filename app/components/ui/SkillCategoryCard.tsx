"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { SkillCategory } from "../../data/portfolio";
import { skillGlowMap } from "../../data/portfolio";
import { ProgressBar } from "./ProgressBar";
import { accentStyles } from "./skillAccentStyles";

type SkillCategoryCardProps = {
  category: SkillCategory;
  icon: LucideIcon;
  featured?: boolean;
};

export function SkillCategoryCard({
  category,
  icon: Icon,
  featured,
}: SkillCategoryCardProps) {
  const styles = accentStyles[category.accent];

  return (
    <motion.div
      className={`group animated-border relative h-full overflow-hidden rounded-2xl border border-border bg-surface-elevated/50 p-6 transition-all duration-300 hover:border-border-hover sm:p-7 ${styles.border}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
        aria-hidden
      />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/50 ${styles.iconBg}`}
            >
              <Icon className={`h-5 w-5 ${styles.label}`} aria-hidden />
            </div>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} aria-hidden />
                <span
                  className={`font-mono text-[11px] tracking-widest uppercase ${styles.label}`}
                >
                  {category.category}
                </span>
              </div>
              <p className="text-sm text-muted">{category.description}</p>
            </div>
          </div>
          <span className="font-mono text-2xl font-bold text-white/[0.04]">
            {String(category.skills.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mb-5">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-muted">Proficiency</span>
            <span className="font-mono text-foreground">{category.proficiency}%</span>
          </div>
          <ProgressBar
            value={category.proficiency}
            accent={styles.progress}
            delay={0.1}
          />
        </div>

        <ul className={`flex flex-wrap gap-2 ${featured ? "sm:gap-2.5" : ""}`}>
          {category.skills.map((skill) => (
            <li key={skill}>
              <span
                className={`inline-block rounded-lg border border-border bg-background/40 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-all duration-300 ${styles.pill} ${skillGlowMap[skill] ?? ""}`}
              >
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
