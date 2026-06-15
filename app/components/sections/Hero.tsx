"use client";

import { motion } from "framer-motion";
import { siteConfig, stats } from "../../data/portfolio";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { FadeIn } from "../ui/FadeIn";
import { FloatingOrbs } from "../ui/FloatingOrbs";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <FloatingOrbs />
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
          <div>
            <FadeIn delay={0.1}>
              <p className="mb-6 font-mono text-sm tracking-widest text-accent uppercase">
                {siteConfig.role}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1
                className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-foreground">Vivek</span>
                <br />
                <span className="gradient-text">Singh</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {siteConfig.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
                >
                  View my work
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent-muted"
                >
                  Get in touch
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} direction="left" className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-violet-500/10 to-sky-500/10 blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-surface-elevated/80 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-muted">
                    portfolio.tsx
                  </span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-sky-300">engineer</span>{" "}
                    <span className="text-muted">=</span>{" "}
                    <span className="text-amber-300">{`{`}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">name</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-emerald-300">
                      &apos;Vivek Singh&apos;
                    </span>
                    <span className="text-muted">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">role</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-emerald-300">
                      &apos;Frontend Engineer&apos;
                    </span>
                    <span className="text-muted">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-400">stack</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-emerald-300">
                      [&apos;React&apos;, &apos;Next.js&apos;, &apos;TS&apos;]
                    </span>
                    <span className="text-muted">,</span>
                    {"\n"}
                    <span className="text-amber-300">{`}`}</span>
                  </code>
                </pre>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} className="mt-20">
          <div className="grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p
                  className="text-3xl font-bold text-foreground sm:text-4xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="font-mono text-xs tracking-widest uppercase">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-muted to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
