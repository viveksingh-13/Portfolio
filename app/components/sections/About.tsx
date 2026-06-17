"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { siteConfig, stats } from "../../data/portfolio";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_50%,rgba(167,139,250,0.05),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Engineering interfaces that are fast, accessible, and built to scale."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="right">
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-sky-500/20 blur-2xl"
                aria-hidden
              />
              <div className="avatar-glow relative overflow-hidden rounded-3xl border border-border glass-strong p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-sky-500/25">
                    <span
                      className="text-4xl font-bold gradient-text"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      VS
                    </span>
                  </div>
                  <h3
                    className="mb-1 text-xl font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {siteConfig.name}
                  </h3>
                  <p className="mb-4 text-sm text-accent">{siteConfig.role}</p>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {siteConfig.location}
                  </div>
                </div>

                <div className="mt-8 space-y-3 border-t border-border pt-6">
                  {[
                    { label: "Education", value: siteConfig.education.degree },
                    { label: "University", value: siteConfig.education.school },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 text-sm">
                      <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                        {item.label}
                      </span>
                      <span className="text-right font-medium text-foreground/80">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                {siteConfig.aboutStory}
              </p>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                {siteConfig.summary}
              </p>
              <p className="text-base leading-relaxed text-muted">
                I focus on{" "}
                <span className="text-foreground">performance optimization</span>,{" "}
                <span className="text-foreground">scalable architecture</span>, and{" "}
                <span className="text-foreground">delightful user experiences</span>{" "}
                — the kind of craft that shows up in Lighthouse scores and user retention.
              </p>
            </div>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="card-shine group rounded-2xl border border-border bg-surface-elevated/50 p-6 transition-all hover:border-accent/20 hover:bg-surface-elevated/80"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p
                  className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
                <div
                  className="mt-4 h-px w-full bg-gradient-to-r from-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  aria-hidden
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
