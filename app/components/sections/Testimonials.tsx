"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/FadeIn";

const typeLabels = {
  manager: "Manager",
  client: "Client",
  peer: "Peer",
};

const typeColors = {
  manager: "text-violet-400 border-violet-500/20 bg-violet-500/10",
  client: "text-sky-400 border-sky-500/20 bg-sky-500/10",
  peer: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          title="What People Say"
          subtitle="Feedback from managers, clients, and peers I've collaborated with."
          align="center"
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author + testimonial.company}>
              <motion.article
                className="glass animated-border group relative flex h-full flex-col rounded-2xl border border-border p-6 sm:p-7"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <Quote
                  className="mb-4 h-8 w-8 text-accent/30 transition-colors group-hover:text-accent/50"
                  aria-hidden
                />

                <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground/85 sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="border-t border-border pt-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase ${typeColors[testimonial.type]}`}
                    >
                      {typeLabels[testimonial.type]}
                    </span>
                  </div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
