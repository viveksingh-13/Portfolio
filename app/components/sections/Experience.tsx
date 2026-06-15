"use client";

import { motion } from "framer-motion";
import { experience } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          number="03"
          title="Experience"
          subtitle="A timeline of roles where I've grown and delivered impact."
        />

        <StaggerContainer className="relative">
          <div
            className="absolute top-0 bottom-0 left-[7px] w-px bg-border lg:left-[11px]"
            aria-hidden
          />

          <div className="space-y-12">
            {experience.map((job) => (
              <StaggerItem key={`${job.company}-${job.period}`}>
                <motion.article
                  className="relative pl-10 lg:pl-14"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background lg:h-[23px] lg:w-[23px]"
                    aria-hidden
                  />

                  <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover sm:p-8">
                    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3
                          className="text-xl font-semibold text-foreground"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {job.role}
                        </h3>
                        <p className="mt-1 text-accent">{job.company}</p>
                        {"location" in job && job.location && (
                          <p className="mt-1 font-mono text-xs text-muted">
                            {job.location}
                          </p>
                        )}
                      </div>
                      <time className="font-mono text-sm text-muted">
                        {job.period}
                      </time>
                    </div>

                    <p className="mb-5 leading-relaxed text-muted">
                      {job.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
