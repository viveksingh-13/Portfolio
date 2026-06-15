"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/FadeIn";

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const content = (
    <motion.article
      className={`card-shine group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-colors hover:border-border-hover ${
        featured ? "lg:col-span-2" : ""
      }`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        className={`relative h-48 overflow-hidden bg-gradient-to-br sm:h-56 ${project.gradient} ${featured ? "lg:h-64" : ""} ${"image" in project && project.image ? "" : ""}`}
      >
        {"image" in project && project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/90 via-surface-elevated/20 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 grid-pattern opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-6xl font-bold text-foreground/5 sm:text-7xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
          </>
        )}
        <div className="absolute top-4 right-4 z-10">
          <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3
              className={`font-semibold text-foreground ${featured ? "text-2xl" : "text-xl"}`}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {project.title}
            </h3>
            {"subtitle" in project && project.subtitle && (
              <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
            )}
          </div>
          {"url" in project && project.url && (
            <motion.span
              className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
              whileHover={{ x: 4, y: -4 }}
            >
              ↗
            </motion.span>
          )}
        </div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors group-hover:border-accent/20"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );

  if ("url" in project && project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`Visit ${project.title}`}
      >
        {content}
      </a>
    );
  }

  return content;
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Featured Projects"
          subtitle="Production applications I've built — click to visit live sites."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
