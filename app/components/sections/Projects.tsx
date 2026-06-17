"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { projects, type Project } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../ui/TiltCard";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/FadeIn";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      >
        Live Demo
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground"
          aria-label={`View ${project.title} source on GitHub`}
        >
          <GithubIcon className="h-3.5 w-3.5" aria-hidden />
          GitHub
        </a>
      )}
    </div>
  );
}

function SpotlightProject({ project }: { project: Project }) {
  return (
    <FadeIn>
      <TiltCard maxTilt={4}>
        <article className="card-shine animated-border group relative overflow-hidden rounded-3xl border border-border bg-surface-elevated/80">
          <div className="grid lg:grid-cols-2">
            <div
              className={`relative min-h-[280px] overflow-hidden bg-gradient-to-br lg:min-h-[400px] ${project.gradient}`}
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface-elevated/80" />
              <div className="absolute top-5 left-5">
                <span className="rounded-full border border-accent/30 bg-accent-muted px-3 py-1 font-mono text-xs text-accent">
                  Featured
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
              <span className="mb-3 font-mono text-xs text-muted">{project.year}</span>
              <h3
                className="mb-2 text-2xl font-semibold text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-accent">{project.subtitle}</p>
              <p className="mb-6 text-base leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mb-6 space-y-2">
                {project.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ProjectLinks project={project} />
            </div>
          </div>
        </article>
      </TiltCard>
    </FadeIn>
  );
}

function BentoProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <TiltCard maxTilt={6} className={`h-full ${className}`}>
      <motion.article
        className="card-shine animated-border group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated/80 transition-colors hover:border-border-hover"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div
          className={`relative h-48 overflow-hidden bg-gradient-to-br sm:h-52 ${project.gradient}`}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/20 to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="glass rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
              {project.year}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3
            className="text-lg font-semibold text-foreground sm:text-xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
          <p className="mt-3 mb-4 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <ProjectLinks project={project} />
          </div>
        </div>
      </motion.article>
    </TiltCard>
  );
}

export function Projects() {
  const spotlight = projects.find((p) => p.spotlight) ?? projects[0];
  const bentoProjects = projects.filter((p) => p.title !== spotlight.title);

  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Featured Projects"
          subtitle="Production applications with measurable impact — performance, scale, and craft."
        />

        <div className="mb-12">
          <SpotlightProject project={spotlight} />
        </div>

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bentoProjects.map((project, index) => (
            <StaggerItem
              key={project.title}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <BentoProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
