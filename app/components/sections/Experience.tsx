"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ExperienceEntry } from "../../data/portfolio";
import { experience } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { useReducedMotion } from "../../hooks/useReducedMotion";

function ExperienceCard({ job }: { job: ExperienceEntry }) {
  return (
    <article className="group relative pl-8 sm:pl-10">
      <div
        className="absolute top-2 left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background shadow-[0_0_12px_rgba(167,139,250,0.4)]"
        aria-hidden
      >
        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
      </div>

      <div className="card-shine animated-border overflow-hidden rounded-2xl border border-border bg-surface-elevated/60 transition-all duration-300 group-hover:border-border-hover group-hover:bg-surface-elevated/80">
        <div
          className="h-px w-full bg-gradient-to-r from-accent/60 via-sky-400/40 to-transparent"
          aria-hidden
        />

        <div className="p-6 sm:p-7 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <time className="mb-2 block font-mono text-sm text-accent">
                {job.period}
              </time>
              <h3
                className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {job.role}
              </h3>
              <p className="mt-1.5 text-base font-medium text-foreground/70">
                {job.company}
              </p>
              <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>
            </div>

            {job.metrics.length > 0 && (
              <div className="flex shrink-0 gap-3">
                {job.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border bg-background/50 px-3.5 py-2.5 text-center transition-colors group-hover:border-accent/15"
                  >
                    <p
                      className="text-lg font-bold leading-none text-foreground"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {metric.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] tracking-wide text-muted uppercase">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {job.description}
          </p>

          <ul className="mb-6 space-y-3">
            {job.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-muted">
                  <Check className="h-3 w-3 text-accent" aria-hidden />
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 border-t border-border pt-5">
            {job.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-background/30 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:border-accent/15 group-hover:text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          title="Experience"
          subtitle="Roles where I've shipped features, improved performance, and delivered measurable business outcomes."
        />

        <div className="relative">
          <motion.div
            className="timeline-line absolute top-2 bottom-2 left-[7px] w-px sm:left-[7px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ transformOrigin: "top" }}
            aria-hidden
          />

          <div className="space-y-10 sm:space-y-14">
            {experience.map((job, index) =>
              reducedMotion ? (
                <ExperienceCard key={`${job.company}-${job.period}`} job={job} />
              ) : (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <ExperienceCard job={job} />
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
