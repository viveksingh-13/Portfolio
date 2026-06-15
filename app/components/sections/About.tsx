import { siteConfig } from "../../data/portfolio";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="A brief introduction to who I am and what drives my work."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <FadeIn>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I&apos;m <span className="text-foreground">{siteConfig.name}</span>
                , a {siteConfig.role.toLowerCase()} based in{" "}
                <span className="text-foreground">{siteConfig.location}</span>.
                I specialize in React.js, Next.js, and TypeScript — building
                interfaces that are fast, accessible, and production-ready.
              </p>
              <p>{siteConfig.summary}</p>
              <p>
                I&apos;ve delivered products across fintech, AI SaaS, travel tech,
                and real-time platforms — from admin dashboards and design systems
                to AI-powered apps and multiplayer casino experiences with live
                WebSocket infrastructure.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3
                className="mb-6 text-sm font-semibold tracking-widest text-accent uppercase"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Quick Facts
              </h3>
              <dl className="space-y-5">
                {[
                  { label: "Location", value: siteConfig.location },
                  { label: "Role", value: siteConfig.title },
                  { label: "Education", value: siteConfig.education.degree },
                  {
                    label: "University",
                    value: `${siteConfig.education.school} (${siteConfig.education.period})`,
                  },
                  { label: "Availability", value: "Open to opportunities" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-4 border-b border-border pb-5 last:border-0 last:pb-0"
                  >
                    <dt className="shrink-0 font-mono text-xs tracking-wider text-muted uppercase">
                      {item.label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
