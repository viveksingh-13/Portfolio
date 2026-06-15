"use client";

import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/FadeIn";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Skills & Expertise"
          subtitle="Technologies and practices I use to build exceptional products."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <motion.div
                className="card-shine group h-full rounded-2xl border border-border bg-surface-elevated p-7 transition-colors hover:border-border-hover"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-muted font-mono text-xs text-accent">
                    {group.category.slice(0, 2).toUpperCase()}
                  </span>
                  <h3
                    className="text-lg font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background/50 px-3.5 py-1.5 font-mono text-xs text-muted transition-colors group-hover:border-accent/20 group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
