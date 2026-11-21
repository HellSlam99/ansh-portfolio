export const siteConfig = {
  name: "Ansh Garg",
  initials: "AG",
  title: "Associate QA Engineer · SDET · Dev",
  email: "anshgarg2593@gmail.com",
  location: "Surat, Gujarat, India",
  description:
    "QA cum Dev — I break software for a living, then write the code that keeps it fixed. Multi-agent LLM test platforms, self-healing Playwright suites and CI/CD at enterprise scale.",
  url: "https://github.com/HellSlam99",
  githubUsername: "HellSlam99",
  linkedin: "https://www.linkedin.com/in/anshgarg2593/",
  resumePath: "/resume/Ansh_Garg_Resume.pdf",
  profileImage: "/images/profile.png",
  profileImageAlt:
    "Professional portrait of Ansh Garg, Associate QA Engineer and SDET, wearing a gray shirt and glasses while holding a laptop in a modern office setting.",
  ogImage: "/og-image.png",
  keywords: [
    "Associate QA Engineer",
    "QA cum Dev",
    "SDET",
    "Multi-Agent LLM Systems",
    "Claude Agent SDK",
    "Self-Healing Test Automation",
    "Load Testing",
    "Python Automation",
    "Test Automation Framework",
    "API Testing",
    "Playwright",
    "Selenium",
    "Pytest",
    "CI/CD",
    "AI-Assisted Testing",
  ],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export const typingTexts = [
  "Associate QA Engineer",
  "QA cum Dev",
  "SDET who ships code",
  "Multi-Agent LLM Builder",
  "Breaking things before prod does",
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/HellSlam99", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anshgarg2593/",
    icon: "linkedin",
  },
  { name: "Email", href: "mailto:anshgarg2593@gmail.com", icon: "mail" },
];

export const stats = [
  { label: "Regression Tests Automated", value: 23, suffix: "K+" },
  { label: "Specialist AI Agents", value: 12, suffix: "" },
  { label: "CI/CD Pipelines Orchestrated", value: 40, suffix: "" },
  { label: "Agent Self-Tests", value: 184, suffix: "" },
];

export const aboutContent = {
  heading: "QA cum Dev &",
  headingAccent: "Automation",
  paragraphs: [
    "QA cum Dev, if you know you know. I started as a tester and never stopped building — 1+ year at Motadata testing and engineering for an enterprise observability platform, writing Python and Node.js on both sides of the fence.",
    "My flagship build: an orchestrator-based multi-agent platform on the Claude Agent SDK that turns a Jira ticket into a verified, self-healing Playwright suite — 12 specialist agents, a 10-stage pipeline, sandboxed permissions and human-approved fixes.",
    "Beyond agents: Pytest/Playwright/Selenium frameworks, REST API validation, protocol-level load testing, Linux and SQL diagnostics, and CI/CD orchestration across 40 pipelines. Off the clock, my personal interests are QFRC and automating & optimizing daily processes.",
  ],
};

export const skillsDescription =
  "QA instincts, developer toolbelt — automation frameworks, multi-agent LLM systems, API and load testing, and CI/CD.";

export const skillCategories = [
  {
    title: "Programming",
    skills: ["Python (Primary)", "JavaScript (Node.js)"],
  },
  {
    title: "AI / LLM Engineering",
    skills: [
      "Claude Agent SDK",
      "Multi-Agent Systems",
      "MCP",
      "Prompt Engineering",
      "LLM Guardrails",
      "Human-in-the-Loop",
    ],
  },
  {
    title: "Software Engineering",
    skills: ["System Design", "OOP", "Concurrency", "WebSockets", "CLI Tools"],
  },
  {
    title: "Automation",
    skills: ["Pytest", "Selenium", "Playwright", "Appium"],
  },
  {
    title: "Testing",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "End-to-End Testing",
      "Load/Performance Testing",
      "Cross Browser Testing",
      "Mobile Testing",
      "API Testing",
      "Data Driven Testing",
      "Self-Healing Tests",
    ],
  },
  {
    title: "API",
    skills: [
      "REST APIs",
      "Requests",
      "Swagger/OpenAPI",
      "OAuth 2.0",
      "JWT Authentication",
      "JSON Schema Validation",
      "Postman",
    ],
  },
  {
    title: "Framework Design",
    skills: [
      "Pytest Fixtures",
      "Markers",
      "Parametrization",
      "Parallel Execution",
      "Allure Reports",
      "Logging",
      "Screenshot Capture",
      "Video Recording",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jenkins",
      "Azure DevOps",
      "Jira",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "ClickHouse", "H2"],
  },
  {
    title: "Systems",
    skills: ["Linux", "Networking Fundamentals", "Network Monitoring Systems"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "GCP", "HA", "DR", "Cloud Deployment"],
  },
  {
    title: "Core Engineering",
    skills: [
      "Data Structures",
      "Algorithms",
      "SDLC",
      "STLC",
      "Debugging",
      "Root Cause Analysis",
    ],
  },
];

export const currentlyExploring = [
  {
    title: "Multi-Agent LLM Platforms",
    description:
      "Hub-and-spoke orchestration, capability registries and shared blackboards that keep agent runs cheap and auditable.",
  },
  {
    title: "Self-Healing Test Automation",
    description:
      "Cited root-cause triage, flaky-test regeneration and human-approved fixes for UI drift.",
  },
  {
    title: "Protocol-Level Load Testing",
    description:
      "Finding the break point from p95 latency and login failures over WebSockets, without browser overhead.",
  },
  {
    title: "Agent Sandboxing & Guardrails",
    description:
      "Permission modes, pre-tool hooks and write confinement to keep autonomous agents safe.",
  },
  {
    title: "CI/CD Release Orchestration",
    description:
      "Running 40 build pipelines in a defined order with parallel groups.",
  },
  {
    title: "MCP & AI Agents for Testing",
    description:
      "Tool-using agents for intelligent test generation and autonomous validation.",
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  responsibilities: Array<{
    text: string;
    highlight?: string;
  }>;
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Associate QA Engineer",
    company: "Motadata",
    period: "Sep 2026 — Present",
    responsibilities: [
      {
        text: "Built a multi-agent LLM platform in Node.js on the Claude Agent SDK: a hub-and-spoke orchestrator routes work to 12 specialist agents via a capability registry and shared blackboard.",
        highlight: "12 agents",
      },
      {
        text: "Implemented a 10-stage pipeline turning a Jira ticket into an executed Playwright suite: requirements extraction, planning, code generation, live locator checks, execution, triage and reporting.",
        highlight: "Jira → Playwright",
      },
      {
        text: "Built self-healing automation: cited root-cause verdicts, flaky-test regeneration, human-approved UI-drift fixes and quarantine after 3 attempts; hardened 18 of 24 positional locators.",
        highlight: "18/24 locators hardened",
      },
      {
        text: "Engineered agent sandboxing with permission modes, pre-tool hooks and write confinement, backed by 184 automated self-tests, plus a concurrent batch runner with cost budgets and a real-time dashboard.",
        highlight: "184 self-tests",
      },
      {
        text: "Built a protocol-level load testing layer on a WebSocket virtual-user runner, modelling 5 user personas and finding the break point from p95 latency, partial-render rate and login failures.",
        highlight: "5 personas",
      },
      {
        text: "Automating release build orchestration across 40 CI/CD pipelines in a defined order with parallel groups.",
        highlight: "40 pipelines",
      },
    ],
    technologies: [
      "Node.js",
      "Claude Agent SDK",
      "Playwright",
      "Python",
      "WebSockets",
      "Jenkins",
      "Jira",
      "ClickHouse",
    ],
  },
  {
    title: "Trainee QA Engineer",
    company: "Motadata",
    period: "Aug 2025 — Aug 2026",
    responsibilities: [
      {
        text: "Built Python test frameworks with Pytest, Playwright, Selenium and POM for UI, API and end-to-end testing, cutting release checklist validation from 6 hours to 1 hour.",
        highlight: "6 hours → 1 hour",
      },
      {
        text: "Built an AI-assisted pipeline running 23,000 regression cases in under 3 hours, reducing manual validation from 5 days to 1 day.",
        highlight: "23,000 tests in <3 hours",
      },
      {
        text: "Wrote reusable Python plugins and diagnostics tooling for an enterprise NMS using REST APIs, SQL, Linux and log analysis, cutting production bug resolution from 2 weeks to 3 days.",
        highlight: "2 weeks → 3 days",
      },
      {
        text: "Ran suites in Jenkins, GitHub Actions and Docker. Internship Aug 2025 — May 2026; full-time from Jun 2026.",
      },
    ],
    technologies: [
      "Python",
      "Pytest",
      "Selenium",
      "REST APIs",
      "SQL",
      "Linux",
      "GitHub Actions",
      "Docker",
    ],
  },
];

export const projectsDescription =
  "Frameworks built with a tester's paranoia and a developer's taste — UI, API and mobile, with parallel execution and CI/CD baked in.";

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  href?: string;
  liveUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Python SDET Automation Framework",
    description:
      "Pytest + Playwright/Selenium framework with POM, parallel runs, retries, Allure reports and GitHub Actions CI.",
    tags: [
      "Python",
      "Pytest",
      "Playwright",
      "Selenium",
      "POM",
      "Fixtures",
      "Allure Reports",
      "Pytest-xdist",
      "Docker",
      "GitHub Actions",
    ],
    featured: true,
    href: "https://github.com/HellSlam99/selenium-pytest-framework",
  },
  {
    title: "API Automation Framework",
    description:
      "REST API framework (Pytest, Requests) with JSON Schema validation, OAuth 2.0/JWT auth and SQL-backed data checks.",
    tags: [
      "Python",
      "Pytest",
      "Requests",
      "JSON Schema",
      "Swagger",
      "OAuth2",
      "JWT",
      "Faker",
      "Postman",
      "Docker",
    ],
    featured: false,
    href: "https://github.com/HellSlam99/api-automation-framework",
  },
  {
    title: "Mobile Application Automation Framework",
    description:
      "Appium + Pytest Android framework (UIAutomator2, POM) for gestures, permissions and deep links across devices.",
    tags: [
      "Python",
      "Appium",
      "Pytest",
      "Android Studio",
      "ADB",
      "UIAutomator2",
      "POM",
      "Docker",
      "GitHub Actions",
    ],
    featured: false,
    href: "https://github.com/HellSlam99/python-appium-framework",
  },
];

export const certifications = [
  { title: "Build AI Agents using MCP", issuer: "Coursera (IBM)" },
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services" },
  { title: "Tools of the Trade: Linux and SQL", issuer: "Coursera (Google)" },
  { title: "Advanced Networking Concepts", issuer: "Motadata" },
  { title: "AIOps Fundamentals", issuer: "Motadata" },
];

export const terminalCommands = {
  whoami: "Associate QA Engineer — QA cum Dev (Python + Node.js)",
  skills: [
    "Python",
    "Node.js",
    "Claude Agent SDK",
    "Playwright",
    "Pytest",
    "Selenium",
    "REST APIs",
    "Docker",
    "Linux",
  ],
  experience:
    "Associate QA Engineer @ Motadata (Trainee QA Aug 2025 → Sep 2026)",
  interests: [
    "QFRC",
    "Automating & Optimizing Daily Processes",
    "Multi-Agent LLM Systems",
    "Self-Healing Automation",
    "Load Testing",
    "Breaking things in staging",
  ],
};

export const contactCards = [
  {
    icon: "mail",
    label: "Email",
    value: "anshgarg2593@gmail.com",
    href: "mailto:anshgarg2593@gmail.com",
    copyable: true,
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "anshgarg2593",
    href: "https://www.linkedin.com/in/anshgarg2593/",
    copyable: true,
  },
  {
    icon: "github",
    label: "GitHub",
    value: "HellSlam99",
    href: "https://github.com/HellSlam99",
    copyable: true,
  },
  {
    icon: "location",
    label: "Location",
    value: "Surat, Gujarat, India",
    copyable: true,
  },
];
