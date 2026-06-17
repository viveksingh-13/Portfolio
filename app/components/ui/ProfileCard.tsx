"use client";

import { motion } from "framer-motion";
import { Gauge, Sparkles, Zap, Briefcase } from "lucide-react";
import { profileMetrics, siteConfig } from "../../data/portfolio";
import { AnimatedCounter } from "./AnimatedCounter";
import { TiltCard } from "./TiltCard";

const metricIcons = [Briefcase, Sparkles, Zap, Gauge];

export function ProfileCard() {
  return (
    <TiltCard float className="relative">
      <div className="animated-border glass-strong relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-sky-500/10"
          aria-hidden
        />

        <div className="relative">
          <div className="mb-6 flex items-center gap-4">
            <div className="avatar-glow relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-sky-500/20">
              <span
                className="text-2xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                VS
              </span>
            </div>
            <div>
              <p
                className="text-lg font-semibold text-foreground"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {siteConfig.name}
              </p>
              <p className="text-sm text-muted">{siteConfig.role}</p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            {profileMetrics.map((metric, index) => {
              const Icon = metricIcons[index];
              return (
                <motion.div
                  key={metric.label}
                  className="rounded-xl border border-border bg-background/40 p-3.5 transition-colors hover:border-accent/20 hover:bg-accent-muted/30"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                    <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                      {metric.label}
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{metric.sublabel}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-xl border border-border bg-background/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Performance
              </span>
              <span className="font-mono text-xs text-emerald-400">Excellent</span>
            </div>
            <div className="space-y-2.5">
              {[
                { label: "Lighthouse", value: 93 },
                { label: "Accessibility", value: 100 },
                { label: "Best Practices", value: 100 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted">{item.label}</span>
                    <span className="font-mono text-foreground">
                      <AnimatedCounter value={item.value} />
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
