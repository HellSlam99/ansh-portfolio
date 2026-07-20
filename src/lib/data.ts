export const siteConfig = {
  name: "Ansh Garg",
  initials: "AG",
  title: "Software Development Engineer in Test (SDET)",
  email: "anshgarg2593@gmail.com",
  location: "Surat, Gujarat, India",
  description:
    "Designing scalable automation frameworks, API validation systems and AI-assisted quality engineering solutions for enterprise software.",
  url: "https://github.com/HellSlam99",
  githubUsername: "HellSlam99",
  linkedin: "https://www.linkedin.com/in/ansh-garg-898343314/",
  resumePath: "/resume/Ansh_Garg_Resume.pdf",
  profileImage: "/images/profile.png",
  profileImageAlt:
    "Professional portrait of Ansh Garg, Software Development Engineer in Test, wearing a gray shirt and glasses while holding a laptop in a modern office setting.",
  ogImage: "/og-image.png",
  keywords: [
    "SDET",
    "Software Development Engineer in Test",
    "QA Automation Engineer",
    "Python Automation",
    "Test Automation Framework",
    "API Testing",
    "Playwright",
    "Selenium",
    "Pytest",
    "CI/CD",
    "AI-Assisted Testing",
    "Quality Engineering",
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
  "Software Development Engineer in Test",
  "QA Automation Engineer",
  "Python Automation Engineer",
  "Python Developer",
  "AI-Assisted Testing Enthusiast",
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/HellSlam99", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ansh-garg-898343314/",
    icon: "linkedin",
  },
  { name: "Email", href: "mailto:anshgarg2593@gmail.com", icon: "mail" },
];

export const stats = [
  { label: "Regression Tests Automated", value: 23, suffix: "K+" },
  { label: "Release Validation Reduction", value: 83, suffix: "%" },
  { label: "Manual Validation Reduction", value: 80, suffix: "%" },
  { label: "Certifications", value: 5, suffix: "" },
];

export const aboutContent = {
  heading: "Quality Engineering &",
  headingAccent: "Automation",
  paragraphs: [
    "Software Development Engineer in Test specializing in Python automation, framework architecture and AI-assisted quality engineering for enterprise NMS and observability platforms.",
    "I design scalable automation frameworks with Pytest, Playwright and Selenium — covering UI, API and end-to-end validation with parallel execution, structured reporting and CI/CD integration.",
    "My work spans REST API validation, Linux-based production diagnostics, SQL-backed backend verification and root cause analysis — reducing manual validation cycles and accelerating release confidence across agile teams.",
  ],
};

export const skillsDescription =
  "End-to-end quality engineering across automation frameworks, API validation, CI/CD pipelines and AI-assisted testing workflows.";

export const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript"],
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
      "Cross Browser Testing",
      "Mobile Testing",
      "API Testing",
      "Data Driven Testing",
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
    skills: ["Git", "GitHub", "GitHub Actions", "Jenkins", "Docker", "CI/CD"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Systems",
    skills: ["Linux", "Networking Fundamentals", "Network Monitoring Systems"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "GCP", "HA", "DR"],
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
  {
    title: "AI",
    skills: ["AI-Assisted Test Case Generation", "AI-Assisted Test Execution"],
  },
];

export const currentlyExploring = [
  {
    title: "Enterprise Test Automation Frameworks",
    description:
      "Designing modular, reusable frameworks for large-scale enterprise validation workflows.",
  },
  {
    title: "Playwright & Appium Automation",
    description:
      "Cross-browser and mobile automation with modern tooling and device farm integration.",
  },
  {
    title: "AI-Assisted QA Pipelines",
    description:
      "Integrating AI into test planning, execution and large-scale regression pipelines.",
  },
  {
    title: "Large Scale API Testing",
    description:
      "Schema validation, authentication flows and backend regression at enterprise scale.",
  },
  {
    title: "CI/CD Test Automation",
    description:
      "Pipeline-driven quality gates with parallel execution and automated reporting.",
  },
  {
    title: "AI Agents for Software Testing",
    description:
      "Agentic workflows for intelligent test generation and autonomous validation.",
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
    title: "Software Development Engineer in Test",
    company: "Motadata",
    period: "Aug 2025 — Present",
    responsibilities: [
      {
        text: "Built scalable Python automation frameworks using Pytest, Playwright, Selenium and Page Object Model architecture.",
      },
      {
        text: "Reduced release checklist validation from 6 hours to 1 hour.",
        highlight: "6 hours → 1 hour",
      },
      {
        text: "Built an AI-assisted QA pipeline executing 23,000 regression test cases in under 3 hours.",
        highlight: "23,000 tests in <3 hours",
      },
      {
        text: "Reduced manual validation from 5 days to 1 day across release cycles.",
        highlight: "5 days → 1 day",
      },
      {
        text: "Developed reusable Python plugins for enterprise NMS workflow automation and data processing.",
      },
      {
        text: "Reduced production bug resolution SLA from 2 weeks to 3 days through automated diagnostics.",
        highlight: "2 weeks → 3 days",
      },
      {
        text: "Automated REST API validation with schema checks, OAuth 2.0 and JWT authentication flows.",
      },
      {
        text: "Performed backend validation using SQL queries, Linux log analysis and root cause investigation.",
      },
      {
        text: "Integrated test automation with CI/CD pipelines via GitHub Actions, Jenkins and Docker.",
      },
      {
        text: "Collaborated with cross-functional agile teams to deliver quality releases and resolve production issues.",
      },
    ],
    technologies: [
      "Python",
      "Pytest",
      "Playwright",
      "Selenium",
      "REST APIs",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Linux",
      "PostgreSQL",
    ],
  },
];

export const projectsDescription =
  "Enterprise-grade automation frameworks for UI, API and mobile testing — built for scalability, parallel execution and CI/CD integration.";

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
      "A modular enterprise-grade automation framework supporting UI, functional and end-to-end testing with parallel execution, retry mechanisms and reusable architecture.",
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
      "Reusable REST API automation framework supporting schema validation, authentication, SQL-backed verification and backend regression testing.",
    tags: [
      "Python",
      "Pytest",
      "Requests",
      "JSON Schema",
      "Swagger",
      "OAuth2",
      "JWT",
      "Postman",
      "Docker",
    ],
    featured: false,
    href: "https://github.com/HellSlam99/api-automation-framework",
  },
  {
    title: "Mobile Application Automation Framework",
    description:
      "Enterprise-ready Android automation framework supporting gestures, permissions, deep links and multi-device execution.",
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
  { title: "Build AI Agents using MCP", issuer: "Professional Development" },
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services" },
  { title: "Tools of the Trade: Linux and SQL", issuer: "Professional Development" },
  { title: "Advanced Networking Concepts", issuer: "Professional Development" },
  { title: "AIOps Fundamentals", issuer: "Professional Development" },
];

export const terminalCommands = {
  whoami: "Software Development Engineer in Test (SDET)",
  skills: [
    "Python",
    "Pytest",
    "Playwright",
    "Selenium",
    "Appium",
    "REST APIs",
    "GitHub Actions",
    "Docker",
    "Linux",
  ],
  experience: "SDET @ Motadata",
  interests: [
    "Automation Frameworks",
    "AI-Assisted QA",
    "API Testing",
    "CI/CD",
    "Enterprise NMS",
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
    value: "ansh-garg-898343314",
    href: "https://www.linkedin.com/in/ansh-garg-898343314/",
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
