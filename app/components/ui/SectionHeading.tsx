import { FadeIn } from "./FadeIn";

type SectionHeadingProps = {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <FadeIn className={align === "center" ? "text-center" : ""}>
      <div
        className={`mb-12 flex flex-col gap-3 ${
          align === "center" ? "items-center" : ""
        }`}
      >
        <span className="font-mono text-sm tracking-widest text-accent uppercase">
          {number}
        </span>
        <h2
          className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
        )}
      </div>
    </FadeIn>
  );
}
