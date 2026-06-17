"use client";

import {
  Code2,
  Database,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { coreStack, skillCategories } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillCategoryCard } from "../ui/SkillCategoryCard";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/FadeIn";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Layers,
  backend: Code2,
  database: Database,
  tools: Wrench,
};

export function Skills() {
  const [frontend, backend, databases, tools] = skillCategories;

  return (
    <section id="skills" className="relative py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(167,139,250,0.06),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Skills & Expertise"
          subtitle="A focused toolkit for building performant, accessible products end to end."
        />

        <FadeIn className="mb-12">
          <div className="rounded-2xl border border-border bg-surface-elevated/40 p-5 sm:p-6">
            <p className="mb-4 font-mono text-[11px] tracking-widest text-muted uppercase">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2.5">
              {coreStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-muted px-4 py-2 text-sm font-medium text-foreground transition-shadow"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 24px rgba(167,139,250,0.2)",
                  }}
                >
                  <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          <StaggerItem className="lg:col-span-7">
            <SkillCategoryCard
              category={frontend}
              icon={categoryIcons[frontend.icon]}
              featured
            />
          </StaggerItem>
          <StaggerItem className="lg:col-span-5">
            <SkillCategoryCard
              category={backend}
              icon={categoryIcons[backend.icon]}
            />
          </StaggerItem>
          <StaggerItem className="lg:col-span-5">
            <SkillCategoryCard
              category={databases}
              icon={categoryIcons[databases.icon]}
            />
          </StaggerItem>
          <StaggerItem className="lg:col-span-7">
            <SkillCategoryCard
              category={tools}
              icon={categoryIcons[tools.icon]}
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
