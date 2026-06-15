"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../../data/portfolio";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          number="05"
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
          align="center"
        />

        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-10 text-lg leading-relaxed text-muted">
            I&apos;m currently open to new opportunities and interesting
            collaborations. Whether you have a question, a project idea, or just
            want to say hello — my inbox is always open.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface-elevated px-8 py-4 text-base font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent-muted"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-accent">✉</span>
              {siteConfig.email}
            </motion.a>

            <motion.a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface-elevated px-8 py-4 text-base font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent-muted"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-accent">📞</span>
              {siteConfig.phone}
            </motion.a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent/40 hover:bg-accent-muted hover:text-foreground"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
