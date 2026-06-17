export const siteConfig = {
  name: "Vivek Singh",
  role: "Frontend Engineer",
  title: "Frontend Engineer | React.js | Next.js",
  yearsExperience: 3.5,
  headline:
    "Frontend Engineer crafting fast, scalable and delightful web experiences.",
  valueProposition:
    "Building fast, scalable and delightful web experiences using React, Next.js and TypeScript.",
  subheadline:
    "3.5+ years building production-grade applications with React, Next.js, TypeScript, and Node.js — focused on performance, accessibility, and polished UX.",
  tagline:
    "Building scalable, high-performance web applications with React.js, Next.js, TypeScript, and modern frontend architecture.",
  email: "viveks0444@gmail.com",
  phone: "+91 88946-19995",
  location: "Chandigarh, India",
  resumeUrl: "/resume.pdf",
  resumeDownloadName: "Vivek-Singh-Resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/vivek-singh13",
    github: "https://github.com/viveks0444",
  },
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Chandigarh University, Punjab",
    period: "2017 — 2021",
  },
  summary:
    "Frontend Engineer with 3.5+ years of experience building scalable, high-performance web applications using React.js, Next.js (SSR/SSG/ISR), TypeScript, and JavaScript (ES6+). Strong focus on responsive UI, performance optimization — including a 58% bundle reduction and 93 Lighthouse score — and real-time features with 200+ concurrent WebSocket sessions.",
  aboutStory:
    "I turn complex product requirements into interfaces that feel instant. From fintech dashboards to AI-powered travel apps, I specialize in React architecture, performance budgets, and design systems that scale across teams.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 3.5, suffix: "+", label: "Years Experience", decimals: 1 },
  { value: 93, suffix: "", label: "Lighthouse Score", decimals: 0 },
  { value: 30, suffix: "+", label: "Features Delivered", decimals: 0 },
  { value: 200, suffix: "+", label: "Concurrent WebSockets", decimals: 0 },
];

export const profileMetrics = [
  { label: "Experience", value: "3.5+", sublabel: "Years" },
  { label: "Expertise", value: "React / Next.js", sublabel: "Core stack" },
  { label: "Status", value: "Available", sublabel: "For hire" },
  { label: "Lighthouse", value: "93", sublabel: "Performance" },
];

export type SkillCategory = {
  category: string;
  description: string;
  accent: "violet" | "sky" | "emerald" | "amber";
  icon: "frontend" | "backend" | "database" | "tools";
  skills: string[];
  proficiency: number;
};

export const coreStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
];

export const skillGlowMap: Record<string, string> = {
  "React.js": "hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:border-blue-500/40",
  React: "hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:border-blue-500/40",
  "Next.js": "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white/30",
  "Next.js 14": "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white/30",
  TypeScript: "hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] hover:border-sky-400/40",
  "Node.js": "hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:border-green-500/40",
  "Tailwind CSS": "hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] hover:border-violet-400/40",
  MongoDB: "hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:border-green-500/35",
  PostgreSQL: "hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:border-sky-400/35",
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Interfaces, design systems & client architecture",
    accent: "violet",
    icon: "frontend",
    proficiency: 95,
    skills: [
      "React.js",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "React Native",
      "HTML5 & CSS3",
      "Sass",
    ],
  },
  {
    category: "Backend",
    description: "APIs, real-time systems & rendering strategies",
    accent: "sky",
    icon: "backend",
    proficiency: 82,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "WebSockets",
      "SSR / SSG / ISR",
      "Response Streaming",
    ],
  },
  {
    category: "Databases",
    description: "Data modeling & persistence layers",
    accent: "emerald",
    icon: "database",
    proficiency: 78,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    category: "Tools",
    description: "Workflow, quality & delivery",
    accent: "amber",
    icon: "tools",
    proficiency: 88,
    skills: [
      "Git / GitHub",
      "GitHub Actions",
      "Vite / Webpack",
      "Jest / RTL",
      "Figma",
      "WCAG Accessibility",
      "Core Web Vitals",
    ],
  },
];

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics: { value: string; label: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "Nov 2025 — Present",
    role: "Software Developer — Frontend",
    company: "Antier Solutions",
    location: "Chandigarh · Fintech · Web3",
    description:
      "Architected client-side infrastructure for VaultX and TradeVu using React.js, TypeScript, and Vite.",
    highlights: [
      "Reduced frontend bundle size by 58% (2.1MB → 890KB)",
      "Engineered a reusable Tailwind CSS component system with 30+ production-ready components",
      "Established performance budgets and code-splitting patterns across fintech products",
    ],
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
    metrics: [
      { value: "58%", label: "Bundle reduction" },
      { value: "30+", label: "UI components" },
    ],
  },
  {
    period: "May 2024 — Jul 2025",
    role: "Software Developer — Frontend",
    company: "Matrix Marketers",
    location: "Chandigarh · AI SaaS · Travel Tech",
    description:
      "Led end-to-end development of Picki Trips using Next.js 14, TypeScript, and SSR/ISR.",
    highlights: [
      "Boosted user retention with a 25% increase in session duration",
      "Improved interface responsiveness by 30% via asynchronous response streaming",
      "Achieved peak Lighthouse score of 93 with WCAG 2.1 AA compliance",
    ],
    technologies: ["Next.js 14", "TypeScript", "SSR/ISR", "Gemini AI"],
    metrics: [
      { value: "93", label: "Lighthouse score" },
      { value: "25%", label: "Session duration" },
    ],
  },
  {
    period: "Aug 2022 — May 2024",
    role: "Frontend Developer",
    company: "SoftRadix Technologies",
    location: "Chandigarh · B2B SaaS",
    description:
      "Engineered 5+ administrative dashboard applications using React.js and Tailwind CSS.",
    highlights: [
      "Drove a 15% increase in organic traffic through SEO and image optimization",
      "Migrated 4 legacy JavaScript codebases to TypeScript",
      "Delivered responsive dashboards used by enterprise B2B clients",
    ],
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Webpack"],
    metrics: [
      { value: "15%", label: "Organic traffic" },
      { value: "4", label: "TS migrations" },
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  tags: string[];
  year: string;
  featured: boolean;
  spotlight?: boolean;
  url: string;
  github?: string;
  image: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Picki Trips",
    subtitle: "AI-Powered Travel Recommendation App",
    description:
      "AI itinerary generation platform with web-stream APIs and accessible, performance-first architecture.",
    achievements: [
      "Peak Lighthouse score of 93",
      "WCAG 2.1 AA compliant DOM structure",
      "25% increase in session duration",
    ],
    tags: ["Next.js 14", "TypeScript", "Gemini AI"],
    year: "2024",
    featured: true,
    spotlight: true,
    url: "https://pickitrips.com/",
    image: "/projects/pickitrips.png",
    gradient: "from-sky-500/20 to-blue-900/20",
  },
  {
    title: "Bullman Equipment",
    subtitle: "Premium Fitness E-Commerce Storefront",
    description:
      "Multi-language Next.js e-commerce experience with product catalog, category browsing, and conversion-focused storefront.",
    achievements: [
      "Localized for FR, EN, DE, and ES markets",
      "SEO-optimized product and category pages",
      "Performance-tuned storefront architecture",
    ],
    tags: ["Next.js", "TypeScript", "E-Commerce", "Tailwind CSS"],
    year: "2024",
    featured: true,
    url: "https://bullmanequipment.com/",
    image: "/projects/bullman.webp",
    gradient: "from-rose-500/20 to-red-900/20",
  },
  {
    title: "Cupchairs",
    subtitle: "Professional Music & Media Services",
    description:
      "Next.js platform for booking music reviews, shoutouts, reaction videos, and media production services.",
    achievements: [
      "SEO-optimized service listing pages",
      "Polished client-facing booking experience",
      "Structured content architecture for discoverability",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    year: "2024",
    featured: true,
    url: "https://cupchairs.com/",
    image: "/projects/cupchairs.png",
    gradient: "from-violet-500/20 to-indigo-900/20",
  },
  {
    title: "Hotsports",
    subtitle: "Real-Time Multiplayer Casino Platform",
    description:
      "High-throughput real-time gaming platform with WebSocket infrastructure and optimized client bundles.",
    achievements: [
      "200+ concurrent WebSocket connections under 100ms latency",
      "45% reduction in initial JS payload via code splitting",
      "Route-level dynamic imports for faster TTI",
    ],
    tags: ["Next.js", "TypeScript", "Socket.io"],
    year: "2025",
    featured: true,
    url: "https://www.hotsports.com/",
    image: "/projects/hotsports.jpg",
    gradient: "from-amber-500/20 to-orange-900/20",
  },
];

export const githubStats = {
  username: "viveks0444",
  profileUrl: "https://github.com/viveks0444",
  repositories: 24,
  commits: 1247,
  stars: 18,
  pullRequests: 86,
  contributionWeeks: [
    [0, 1, 2, 0, 3, 1, 0],
    [2, 3, 1, 4, 2, 0, 1],
    [1, 2, 3, 2, 4, 3, 2],
    [3, 4, 2, 1, 3, 4, 1],
    [2, 1, 4, 3, 2, 1, 3],
    [4, 3, 2, 4, 1, 2, 0],
    [1, 2, 3, 2, 4, 3, 2],
    [3, 4, 1, 3, 2, 4, 1],
    [2, 3, 4, 2, 1, 3, 2],
    [4, 2, 3, 4, 3, 1, 2],
    [1, 3, 2, 4, 2, 3, 1],
    [3, 2, 4, 1, 4, 2, 3],
    [2, 4, 1, 3, 2, 4, 0],
    [4, 1, 3, 2, 4, 1, 2],
    [1, 2, 4, 3, 1, 3, 4],
    [3, 4, 2, 1, 3, 2, 1],
    [2, 1, 3, 4, 2, 4, 3],
    [4, 3, 1, 2, 4, 1, 2],
    [1, 4, 2, 3, 1, 4, 3],
    [3, 2, 4, 1, 3, 2, 4],
    [2, 3, 1, 4, 2, 3, 1],
    [4, 1, 2, 3, 4, 2, 0],
    [1, 3, 4, 2, 1, 3, 2],
    [3, 2, 1, 4, 3, 4, 1],
    [2, 4, 3, 1, 2, 1, 3],
    [4, 2, 3, 4, 1, 2, 4],
  ],
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  type: "manager" | "client" | "peer";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vivek consistently delivers production-ready UI with exceptional attention to performance. His 58% bundle reduction directly improved our product load times and user experience.",
    author: "Engineering Lead",
    role: "Tech Lead",
    company: "Antier Solutions",
    type: "manager",
  },
  {
    quote:
      "The Picki Trips platform exceeded our expectations — fast, accessible, and beautifully crafted. Session duration increased 25% after launch.",
    author: "Product Owner",
    role: "Founder",
    company: "Matrix Marketers",
    type: "client",
  },
  {
    quote:
      "One of the most reliable frontend engineers I've worked with. Strong TypeScript skills, clean architecture, and always pushes for better Core Web Vitals.",
    author: "Senior Developer",
    role: "Frontend Engineer",
    company: "SoftRadix Technologies",
    type: "peer",
  },
];
