"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { siteConfig } from "../../data/portfolio";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { FadeIn } from "../ui/FadeIn";
import { FloatingOrbs } from "../ui/FloatingOrbs";
import { LetterReveal } from "../ui/LetterReveal";
import { MagneticButton } from "../ui/MagneticButton";
import { ProfileCard } from "../ui/ProfileCard";
import { SocialLinks } from "../ui/SocialLinks";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <FloatingOrbs />
      <div className="hero-gradient absolute inset-0" aria-hidden />
      <div className="grid-pattern-animated absolute inset-0 opacity-70" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-28 pb-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-32">
        <div>
          <FadeIn delay={0.05}>
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border glass px-4 py-2 font-mono text-xs tracking-widest text-muted uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              </span>
              Available For Opportunities
            </p>
          </FadeIn>

          <h1
            className="mb-4 text-[clamp(2.75rem,7vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <LetterReveal text={siteConfig.name} className="gradient-text" />
          </h1>

          <FadeIn delay={0.45}>
            <p
              className="mb-5 text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {siteConfig.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.valueProposition}
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <MagneticButton
                href="#projects"
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </MagneticButton>
              <MagneticButton
                href={siteConfig.resumeUrl}
                variant="secondary"
                download={siteConfig.resumeDownloadName}
              >
                Download Resume
                <Download className="h-4 w-4" aria-hidden />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                variant="ghost"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                Contact Me
              </MagneticButton>
            </div>
          </FadeIn>

          <SocialLinks />
        </div>

        <FadeIn delay={0.3} direction="left" className="hidden lg:block">
          <ProfileCard />
        </FadeIn>
      </div>

      {!reducedMotion && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 opacity-60" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
