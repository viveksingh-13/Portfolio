"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, GitCommit, Star, FolderGit2 } from "lucide-react";
import { githubStats } from "../../data/portfolio";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/FadeIn";
import { MagneticButton } from "../ui/MagneticButton";

const contributionLevels = ["contribution-0", "contribution-1", "contribution-2", "contribution-3", "contribution-4"];

const statItems = [
  { label: "Repositories", value: githubStats.repositories, icon: FolderGit2 },
  { label: "Commits", value: githubStats.commits, icon: GitCommit },
  { label: "Stars Earned", value: githubStats.stars, icon: Star },
  { label: "Pull Requests", value: githubStats.pullRequests, icon: GitBranch },
];

export function GitHub() {
  return (
    <section id="github" className="relative py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(56,189,248,0.05),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          title="GitHub Activity"
          subtitle="Consistent contributions, open source involvement, and collaborative development."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {statItems.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <motion.div
                    className="card-shine rounded-2xl border border-border bg-surface-elevated/50 p-5 transition-all hover:border-accent/20"
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="mb-3 h-5 w-5 text-accent" aria-hidden />
                    <p
                      className="text-2xl font-bold text-foreground sm:text-3xl"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.15}>
            <div className="animated-border rounded-2xl border border-border bg-surface-elevated/50 p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-xs tracking-wider text-muted uppercase">
                  Contribution Graph
                </p>
                <span className="font-mono text-xs text-foreground/60">
                  @{githubStats.username}
                </span>
              </div>

              <div className="overflow-x-auto pb-2">
                <div className="flex gap-[3px] min-w-max">
                  {githubStats.contributionWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {week.map((level, dayIndex) => (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`h-2.5 w-2.5 rounded-sm sm:h-3 sm:w-3 ${contributionLevels[level]}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: (weekIndex * 7 + dayIndex) * 0.003,
                            duration: 0.2,
                          }}
                          aria-hidden
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span>Less</span>
                  {contributionLevels.map((level) => (
                    <div
                      key={level}
                      className={`h-2.5 w-2.5 rounded-sm ${level}`}
                      aria-hidden
                    />
                  ))}
                  <span>More</span>
                </div>
                <MagneticButton
                  href={githubStats.profileUrl}
                  variant="secondary"
                  external
                  className="!px-4 !py-2 text-xs"
                  strength={0.15}
                >
                  View Profile
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </MagneticButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
