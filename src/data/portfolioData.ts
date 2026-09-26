import type {
  Project,
  ExperienceItem,
  SkillCategory,
  EducationItem,
  LanguageItem,
} from "../types";

export const PERSONAL_INFO = {
  name: "Abdullah Radwan",
  role: "Software Engineer | Full-Stack Developer",
  headline: "Building scalable, reliable software that solves real problems.",
  location: "Cairo, Egypt",
  email: "abdullah.radwan.dev@gmail.com",
  github: "https://github.com/Abdullah-Radwan1",
  linkedin: "https://www.linkedin.com/in/abdullah-radwan-280140284/",
  summary: `Results-driven Software Engineer with strong expertise in full-stack web and mobile development. Specialized in modern TypeScript ecosystems, clean architecture, resilient backends with NestJS and Node.js, and responsive user interfaces using React, Next.js, and Angular. Skilled in database design, performance optimization, and end-to-end technical execution from BRD/PRD requirements through delivery.`,
  aboutHighlights: [
    {
      title: "Scalable Software",
      desc: "Architecting resilient backends and modular frontends built to handle high concurrency and data growth.",
      icon: "Cpu",
    },
    {
      title: "Clean Architecture",
      desc: "Enforcing separation of concerns, DRY principles, and strict domain boundary layers for long-term code health.",
      icon: "Layers",
    },

    {
      title: "Problem Solving",
      desc: "Deconstructing complex engineering bottlenecks into structured, testable, and maintainable software implementations.",
      icon: "Target",
    },
    {
      title: "Maintainability",
      desc: "Writing self-documenting code, strictly typed models, robust error boundaries, and clear technical documentation.",
      icon: "ShieldCheck",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "docky-ai",
    title: "Docky — AI-Powered Contract Analysis SaaS",
    subtitle: "Enterprise AI document processing & compliance platform",
    category: "saas",
    isFeatured: true,
    image: "projects/docky.png",
    date: "Live — July 2026",
    description:
      "AI-driven contract analysis platform enabling automated PDF document analysis, risk and compliance assessment, tier-based billing, usage quota tracking, and real-time email notifications.",
    longDescription:
      "Docky is a flagship full-stack SaaS platform designed to transform raw contract PDFs into actionable compliance insights. Built with React and NestJS, it utilizes Open Router AI for deep document extraction, automated risk scoring, and clause checking. Features robust quota management, subscription billing logic, and instant user alerts.",
    technologies: [
      "React",
      "NestJS",
      "Prisma",
      "Open Router AI",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Automated PDF document analysis & AI summary generation",
      "Legal risk & compliance assessment pipeline",
      "Subscription billing engine & tier quota enforcement",
      "Real-time automated notification dispatch system",
      "Responsive React dashboard with interactive report view",
    ],
    metrics: [
      "July 2026 Launch",
      "AI OpenRouter Engine",
      "Full SaaS Quota Engine",
    ],
    githubUrl: "https://github.com/Abdullah-Radwan1/DOC_AI",
    liveUrl: "https://doc-ai-smoky.vercel.app/",
    architectureNotes: [
      "NestJS backend modular architecture with Prisma ORM data layer",
      "Open Router AI streaming response parser for high-speed document indexing",
      "Stripe/Quota service guards enforcing plan limits prior to contract generation",
    ],
  },
  {
    id: "apex-pm",
    title: "APEX — Project Management System",
    subtitle: "Collaborative task management & team workspace platform",
    category: "web",
    image: "projects/apex.png",
    date: "Live — February 2026",
    description:
      "Comprehensive project management platform featuring granular Role-Based Access Control (RBAC), team member invitations, real-time activity feeds, and notification management.",
    longDescription:
      "APEX delivers a seamless workflow solution for agile development teams. Built with React.js on the frontend and NestJS with Drizzle ORM on Neon PostgreSQL serverless database. Implements tight RBAC policies, organization member invitations, and real-time state synchronization.",
    technologies: [
      "React.js",
      "NestJS",
      "Drizzle ORM",
      "Neon PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Role-Based Access Control (RBAC) with granular team permissions",
      "Secure project member invitation workflow",
      "Real-time workspace activity feed & notification system",
      "Modern drag-and-drop task boards and sprint views",
    ],
    metrics: ["Live — Feb 2026", "Neon Postgres ORM", "Granular RBAC"],
    githubUrl: "https://github.com/Abdullah-Radwan1/managment-system",
    liveUrl: "https://managment-system-livid.vercel.app/",
    architectureNotes: [
      "Drizzle ORM for type-safe SQL queries on Neon Serverless Postgres",
      "NestJS JWT Auth & custom RBAC decorators for role authorization",
    ],
  },
  {
    id: "angular-nestjs-ecommerce",
    title: "Full-Stack Angular-NestJS E-Commerce",
    subtitle:
      "Enterprise-grade e-commerce application with Server-Side Rendering",
    category: "web",
    image: "projects/angular_ecommerce.png",
    date: "Live — May 2026",
    description:
      "High-performance e-commerce platform built with Angular and NestJS featuring Server-Side Rendering (SSR), optimized checkout workflows, and strict engineering best practices.",
    longDescription:
      "An enterprise e-commerce platform engineered for speed, SEO indexability, and reliability. Leverages Angular Universal/SSR alongside a NestJS micro-service backend. Achieved 100% Best Practices and 95% SEO scores in Google Lighthouse audits.",
    technologies: [
      "Angular",
      "NestJS",
      "SSR",
      "TypeScript",
      "Node.js",
      "REST API",
    ],
    features: [
      "Angular Server-Side Rendering (SSR) for instant first contentful paint",
      "100% Code & Security Best Practices compliance",
      "95% SEO Score with automated meta generator and structured schema",
      "Full catalog search, filtering, cart management, and order tracking",
    ],
    metrics: ["100% Best Practices", "95% SEO Audit", "Angular SSR"],
    githubUrl: "https://github.com/Abdullah-Radwan1/angular-front",
    liveUrl: "https://angular-vogue.vercel.app/",
    architectureNotes: [
      "Angular Universal SSR hydration strategy",
      "NestJS REST API architecture with clean service-controller separation",
    ],
  },
  {
    id: "nextjs-ecommerce",
    title: "Next.js E-Commerce",
    subtitle: "Modern storefront with Stripe checkout & Prisma data engine",
    category: "web",
    image: "projects/ecommerce.png",
    date: "Live — December 2025",
    description:
      "Modern, ultra-fast online shopping platform powered by Next.js App Router, Prisma ORM, PostgreSQL, and Stripe payment gateway integration.",
    longDescription:
      "Engineered with Next.js App Router, this storefront delivers lightning-fast page loading and seamless payment flow. Reached 98% SEO score and 95% Performance rating on Google Lighthouse audits. Features secure Stripe checkout webhooks and dynamic product recommendations.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind/CSS",
      "TypeScript",
    ],
    features: [
      "Stripe checkout integration with secure webhooks",
      "98% SEO score & 95% Lighthouse performance rating",
      "Type-safe database interactions with Prisma ORM",
      "Dynamic product filters, cart management, and customer portal",
    ],
    metrics: ["98% SEO Score", "95% Performance", "Stripe Integration"],
    githubUrl: "https://github.com/Abdullah-Radwan1/fullstack-ecommerce",
    liveUrl: "https://fullstack-ecommerce-flax.vercel.app/en",
    architectureNotes: [
      "Next.js Server Components & Edge caching strategies",
      "Stripe Webhook event handling for automated order status updates",
    ],
  },
  {
    id: "react-native-social",
    title: "React Native Social Media App",
    subtitle: "Cross-platform mobile application with real-time backend",
    category: "mobile",
    image: "projects/funnygram.jpg",
    date: "Live — September 2025",
    description:
      "Cross-platform mobile social experience built with React Native and Expo, featuring Clerk biometric/social authentication and Convex real-time backend sync.",
    longDescription:
      "A responsive mobile social application delivering instant messaging, live activity feeds, and media uploads across iOS and Android. Utilizes Expo framework with Clerk for auth and Convex for reactive real-time database state synchronization.",
    technologies: [
      "React Native",
      "Expo",
      "Clerk Auth",
      "Convex",
      "TypeScript",
    ],
    features: [
      "Cross-platform iOS and Android app with native performance",
      "Real-time database updates and live subscriber feed via Convex",
      "Seamless social and biometric authentication with Clerk",
      "Optimized image caching and smooth gesture handling",
    ],
    metrics: ["Live — Sep 2025", "Real-time Convex DB", "Expo Cross-Platform"],
    githubUrl: "https://github.com/Abdullah-Radwan1/angular-vogueؤ",
    liveUrl: "https://appetize.io/app/b_fa6vgi3ciuwzp2tbzhsllafty4",
    architectureNotes: [
      "Convex reactive subscriptions for sub-millisecond feed sync",
      "Clerk Auth SDK integration with mobile persistent tokens",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "next-path",
    role: "Software Engineering Development Program",
    organization: "Next Path",
    period: "August 2026 – September 2026",
    type: "Engineering Program",
    description:
      "Intensive software development program focusing on professional software delivery practices, architecture design, requirement modeling, and AI-assisted development workflows.",
    highlights: [
      "Authored comprehensive Business Requirements Documents (BRD) and Product Requirements Documents (PRD).",
      "Led Jira sprint delivery planning, ticket breakdown, and task estimation for agile milestones.",
      "Leveraged modern AI development stacks to accelerate prototyping, code review, and refactoring.",
      "Collaborated via GitHub pull request reviews, feature branching, and trunk-based workflows.",
      "Executed systematic debugging and root-cause analysis for complex runtime failures.",
      "Conducted requirements clarification sessions to translate business goals into precise engineering tasks.",
      "Built and delivered an end-to-end technical capstone application adhering to high code standards.",
    ],
    technologies: [
      "BRD/PRD",
      "Jira",
      "AI Stacks",
      "GitHub",
      "Agile",
      "Debugging",
      "Software Architecture",
    ],
  },
  {
    id: "nti-mean",
    role: "Full-Stack Web Developer — MEAN Stack Trainee",
    organization: "National Telecommunication Institute (NTI)",
    period: "March 2026 – June 2026",
    type: "Professional Training",
    description:
      "Specialized full-stack web engineering training program covering modern JavaScript/TypeScript web architectures, REST APIs, authentication security, and document databases.",
    highlights: [
      "Developed single-page applications (SPAs) using Angular with modular routing and reactive forms.",
      "Built scalable RESTful API backends with Node.js and Express framework.",
      "Implemented secure JWT (JSON Web Token) authentication & authorization middleware.",
      "Designed MongoDB database schemas using Mongoose ORM with validation and indexing rules.",
      "Practiced clean code architecture, error handling middleware, and environment isolation.",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "Express",
      "JWT Auth",
      "MongoDB",
      "REST APIs",
      "TypeScript",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "Layout",
    description:
      "Building responsive, accessible, and high-performance user interfaces with modern web standards.",
    skills: [
      "TypeScript",
      "Next.js",
      "Angular",
      "React",
      "React Native",
      "TanStack",
      "Redux",
      "Zustand",
      "Tailwind",
    ],
  },
  {
    title: "Backend & Databases",
    iconName: "Database",
    description:
      "Designing robust API services, database schemas, ORM layers, and microservices.",
    skills: [
      "Node.js",
      "NestJS",
      "GraphQL",
      "PHP",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Drizzle",
      "Database Design",
    ],
  },
  {
    title: "Engineering & Delivery",
    iconName: "Terminal",
    description:
      "Translating business specs into clean software architecture, requirement specs, and agile execution.",
    skills: [
      "Software Architecture",
      "Caching",
      "BRD/PRD",
      "Requirements Analysis",
      "Requirements Clarification",
      "Jira",
      "Debugging",
    ],
  },
  {
    title: "DevOps & Workflow",
    iconName: "GitBranch",
    description:
      "Streamlining CI/CD pipelines, version control, containerization, and team collaboration.",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "CI/CD", "Agile"],
  },
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor's Degree in Quality Management",
  institution: "Ain Shams University",
  period: "October 2021 – June 2025",
  honors: "Graduated with Honors",
  gpa: "GPA: B+",
};

export const LANGUAGES: LanguageItem[] = [
  {
    language: "English",
    proficiency: "Fluent",
    level: "Full Professional Proficiency",
  },
  {
    language: "Deutsch",
    proficiency: "Beginner",
    level: "Elementary Proficiency (A1/A2)",
  },
];
