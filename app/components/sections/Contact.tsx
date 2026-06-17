"use client";

import { Mail } from "lucide-react";
import { siteConfig } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { FadeIn } from "../ui/FadeIn";
import { MagneticButton } from "../ui/MagneticButton";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    value: "Connect on LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    value: "View GitHub Profile",
    icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="contact-gradient absolute inset-0" aria-hidden />
      <div className="grid-pattern absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block font-mono text-sm tracking-widest text-accent uppercase">
            07 — Contact
          </span>
          <h2
            className="mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold tracking-tight gradient-text"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mb-12 text-base leading-relaxed text-muted sm:text-lg">
            Open to full-time roles, contract work, and interesting collaborations.
            I typically respond within 24 hours.
          </p>

          <div className="mb-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <MagneticButton
                  key={link.label}
                  href={link.href}
                  variant={link.label === "Email" ? "primary" : "secondary"}
                  external={link.external}
                  className="w-full sm:w-auto"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {link.value}
                </MagneticButton>
              );
            })}
          </div>

          <p className="font-mono text-xs text-muted">
            {siteConfig.location} · {siteConfig.phone}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
