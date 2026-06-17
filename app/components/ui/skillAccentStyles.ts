const accentStyles = {
  violet: {
    border: "group-hover:border-violet-500/30",
    glow: "from-violet-500/12 via-violet-500/5 to-transparent",
    dot: "bg-violet-400",
    pill: "hover:border-violet-500/25 hover:bg-violet-500/10 hover:text-violet-200",
    label: "text-violet-400",
    iconBg: "group-hover:border-violet-500/20 group-hover:bg-violet-500/10",
    progress: "from-violet-500 to-violet-300",
  },
  sky: {
    border: "group-hover:border-sky-500/30",
    glow: "from-sky-500/12 via-sky-500/5 to-transparent",
    dot: "bg-sky-400",
    pill: "hover:border-sky-500/25 hover:bg-sky-500/10 hover:text-sky-200",
    label: "text-sky-400",
    iconBg: "group-hover:border-sky-500/20 group-hover:bg-sky-500/10",
    progress: "from-sky-500 to-cyan-300",
  },
  emerald: {
    border: "group-hover:border-emerald-500/30",
    glow: "from-emerald-500/12 via-emerald-500/5 to-transparent",
    dot: "bg-emerald-400",
    pill: "hover:border-emerald-500/25 hover:bg-emerald-500/10 hover:text-emerald-200",
    label: "text-emerald-400",
    iconBg: "group-hover:border-emerald-500/20 group-hover:bg-emerald-500/10",
    progress: "from-emerald-500 to-emerald-300",
  },
  amber: {
    border: "group-hover:border-amber-500/30",
    glow: "from-amber-500/12 via-amber-500/5 to-transparent",
    dot: "bg-amber-400",
    pill: "hover:border-amber-500/25 hover:bg-amber-500/10 hover:text-amber-200",
    label: "text-amber-400",
    iconBg: "group-hover:border-amber-500/20 group-hover:bg-amber-500/10",
    progress: "from-amber-500 to-amber-300",
  },
} as const;

export { accentStyles };
