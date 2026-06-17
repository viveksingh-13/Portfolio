"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { siteConfig } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const socialItems = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
];

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const sizeClasses = size === "sm" ? "h-10 w-10" : "h-11 w-11";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-label={item.label}
            className={`glass flex ${sizeClasses} items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.08, duration: 0.4 }}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden />
          </motion.a>
        );
      })}
    </div>
  );
}
