export const siteConfig = {
  name: "Vivek Singh",
  role: "Frontend Engineer",
  title: "Frontend Engineer | React.js | Next.js",
  yearsExperience: 3.5,
  tagline:
    "Building scalable, high-performance web applications with React.js, Next.js, TypeScript, and modern frontend architecture.",
  email: "viveks0444@gmail.com",
  phone: "+91 88946-19995",
  location: "Chandigarh, India",
  social: {
    linkedin: "https://linkedin.com/in/vivek-singh13",
  },
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Chandigarh University, Punjab",
    period: "2017 — 2021",
  },
  summary:
    "Frontend Engineer with 3.5+ years of experience building scalable, high-performance web applications using React.js, Next.js (SSR/SSG/ISR), TypeScript, and JavaScript (ES6+). Strong focus on responsive UI, performance optimization — including a 58% bundle reduction and 93 Lighthouse score — and real-time features with 200+ concurrent WebSocket sessions.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 3.5, suffix: "", label: "Years Experience", decimals: 1 },
  { value: 93, suffix: "", label: "Lighthouse Score", decimals: 0 },
  { value: 30, suffix: "+", label: "UI Components Built", decimals: 0 },
  { value: 200, suffix: "+", label: "Concurrent WebSockets", decimals: 0 },
];

export const skills = [
  {
    category: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Sass",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js 14",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    category: "Performance",
    items: [
      "SSR / SSG / ISR",
      "Code Splitting",
      "Lazy Loading",
      "Bundle Optimization",
      "Core Web Vitals",
      "Response Streaming",
    ],
  },
  {
    category: "Tools & Quality",
    items: [
      "Socket.io",
      "WebSockets",
      "Jest",
      "React Testing Library",
      "Vite",
      "Webpack",
      "GitHub Actions",
      "WCAG Accessibility",
    ],
  },
];

export const experience = [
  {
    period: "Nov 2025 — Present",
    role: "Software Developer — Frontend",
    company: "Antier Solutions",
    location: "Chandigarh · Fintech · Web3",
    description:
      "Architected client-side infrastructure for VaultX and TradeVu using React.js, TypeScript, and Vite. Reduced frontend bundle size by 58% (2.1MB → 890KB). Engineered a reusable Tailwind CSS component system with 30+ production-ready components.",
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    period: "May 2024 — Jul 2025",
    role: "Software Developer — Frontend",
    company: "Matrix Marketers",
    location: "Chandigarh · AI SaaS · Travel Tech",
    description:
      "Led end-to-end development of Picki Trips using Next.js 14, TypeScript, and SSR/ISR. Boosted user retention with a 25% increase in session duration. Improved interface responsiveness by 30% via asynchronous response streaming.",
    technologies: ["Next.js 14", "TypeScript", "SSR/ISR", "Gemini AI"],
  },
  {
    period: "Aug 2022 — May 2024",
    role: "Frontend Developer",
    company: "SoftRadix Technologies",
    location: "Chandigarh · B2B SaaS",
    description:
      "Engineered 5+ administrative dashboard applications using React.js and Tailwind CSS. Drove a 15% increase in organic traffic through SEO and image optimization. Migrated 4 legacy JavaScript codebases to TypeScript.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Webpack"],
  },
];

export const projects = [
  {
    title: "Picki Trips",
    subtitle: "AI-Powered Travel Recommendation App",
    description:
      "Built AI itinerary generation flows using web-stream APIs. Achieved a peak Lighthouse score of 93 with accessible DOM structures meeting WCAG 2.1 AA standards.",
    tags: ["Next.js 14", "TypeScript", "Gemini AI"],
    year: "2024",
    featured: true,
    url: "https://pickitrips.com/",
    image: "/projects/pickitrips.png",
    gradient: "from-sky-500/20 to-blue-900/20",
  },
  {
    title: "Bullman Equipment",
    subtitle: "Premium Fitness E-Commerce Storefront",
    description:
      "Built a multi-language Next.js e-commerce experience for premium fitness equipment — product catalog, category browsing, and a conversion-focused storefront optimized for performance and SEO across FR, EN, DE, and ES locales.",
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
      "Developed a Next.js platform for booking music reviews, shoutouts, reaction videos, interviews, and media production services — with SEO-optimized pages, service listings, and a polished client-facing experience.",
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
      "Sustained 200+ concurrent WebSocket connections with under 100ms latency. Cut initial JS payload by 45% using dynamic code chunks and route-level splitting.",
    tags: ["Next.js", "TypeScript", "Socket.io"],
    year: "2025",
    featured: true,
    url: "https://www.hotsports.com/",
    image: "/projects/hotsports.jpg",
    gradient: "from-amber-500/20 to-orange-900/20",
  },
];
