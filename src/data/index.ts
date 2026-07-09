import type { SkillCategory, Project, Experience, Certification } from "@/types";



export const skillCategories: SkillCategory[] = [
  {
    title: "Security Operations",
    icon: "shield",
    skills: ["Wireshark", "CVSS Scoring", "MITRE ATT&CK", "Diamond Model", "Cyber Kill Chain", "SIEM"],
  },
  {
    title: "Compliance & Governance",
    icon: "search",
    skills: ["SOC 2", "IEC 62443", "ISO 27001", "NIST CSF", "HIPAA", "NIST 800-53"],
  },
  {
    title: "Web Security",
    icon: "settings",
    skills: ["SQLi", "XSS", "IDOR", "Broken Access Control", "Burp Suite", "Dev Tools"],
  },
  {
    title: "Programming",
    icon: "code",
    skills: ["Java", "SQL", "Python", "TypeScript"],
  },
  {
    title: "Digital Forensics",
    icon: "scan-search",
    skills: ["Autopsy", "Ghidra", "FTK"],
  },
];

export const projects: Project[] = [
  {
    icon: "🔬",
    title: "MCP Vulnerability Research Lab",
    description:
      "Proof-of-concept lab built in Cursor IDE demonstrating tool poisoning and prompt injection attacks against MCP servers. Successfully exfiltrated a file via tool poisoning; prompt injection blocked by model safety and documented as a positive research finding.",
    stack: [
      "Python",
      "FastMCP",
      "MCP",
      "Cursor IDE",
      "Prompt Injection",
      "Tool Poisoning",
      "LLM Security",
    ],
    githubUrl: "https://github.com/Aka005/mcp-prompt-injection-lab",
  },
  {
    icon: "🏦",
    title: "Bank Web Application Security Lab",
    description:
      "Security lab demonstrating common web application vulnerabilities including IDOR, SQL injection, broken access control, and parameter tampering. Documented attack paths and recommended security mitigations.",
    stack: [
      "IDOR",
      "SQL Injection",
      "Broken Access Control",
      "Burp Suite",
      "OWASP Top 10",
      "Web Security",
    ],
    githubUrl: "https://github.com/Aka005/SecureBank/tree/main",
  },
  {
    icon: "🥗",
    title: "FoodBridge",
    description:
      "AI-powered inventory management system developed for Penn State Dining to improve demand forecasting and reduce food waste. Built an XGBoost model using inventory data from 2,000+ products to generate data-driven purchasing recommendations.",
    stack: [
      "JavaScript",
      "Python",
      "XGBoost",
      "Node.js",
      "Machine Learning",
      "Inventory Forecasting",
      "Supply Chain",
    ],
    githubUrl: "https://github.com/FoodBridgeAI/Final-MVP-submission",
  },
  {
    icon: "🚚",
    title: "Supply Chain Security Research",
    description:
      "Research project analyzing cybersecurity risks across global supply chains, including third-party vendor risk, open-source software vulnerabilities, AI in defense, semiconductor supply chains, and cybersecurity governance.",
    stack: [
      "Supply Chain Security",
      "Third-Party Risk",
      "Open Source Security",
      "AI Security",
      "NIST",
      "Cyber Risk",
      "Governance",
    ],
    githubUrl:
      "https://www.linkedin.com/in/emily-jao-wb01/overlay/Project/1564824274/treasury/?profileId=ACoAAEKb0ZcBGOOkHaHDaz-s2M5S7fAQH3tbK7c&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BxaAtYMepSDeEz1eQPHWSnA%3D%3D",
  },
  {
    icon: "🌎",
    title: "TBD: APAC Cybersecurity Market Research",
    description:
      "Independent research on cybersecurity trends across the APAC region, analyzing regional threats, security regulations, and employer landscapes to identify career pathways for international cybersecurity professionals.",
    stack: [
      "APAC",
      "Threat Intelligence",
      "Cybersecurity",
      "Research",
      "Governance",
      "OSINT",
    ],
    githubUrl: "#",
  },
  {
    icon: "🍯",
    title: "TBD: SSH Honeypot (Cowrie) Deployment",
    description:
      "Deployed a Cowrie SSH honeypot in a virtualized lab using Docker to observe attacker behavior. Simulated brute-force attacks, captured SSH sessions and command execution, and analyzed logs to understand real-world attack techniques.",
    stack: [
      "Docker",
      "Cowrie",
      "Kali Linux",
      "Parrot Linux",
      "SSH",
      "Nmap",
      "Log Analysis",
    ],
    githubUrl: "https://github.com/Aka005/Honeypot-Experiment",
  },
];

export const experiences: Experience[] = [
  {
    title: "Cyber Risk Intern",
    company: "Leidos",
    period: "May 2026 — Present",
    current: true,
    bullets: [
      "Conducted vendor cybersecurity risk assessments by reviewing third-party audit reports, security questionnaires, and exception documentation",https://github.com/Aka005/Emily-Portfolio/blob/main/src/data/index.ts
      "Evaluated security controls and maintained risk documentation to support vendor risk management decisions",
    ],
  },
  {
    title: "Digital Marketing Intern",
    company: "Siemens K.K.",
    period: "May — Aug 2025",
    bullets: [
      "Managed and validated 10,000+ Salesforce customer records while improving data quality across SAP and Snowflake platforms",
      "Built Power BI dashboards and supported OT cybersecurity assessments aligned with IEC 62443 and ISO 27001 standards",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "Penn State University IT",
    period: "2023 — 2024",
    bullets: [
      "Resolved technical support requests involving Microsoft 365, Duo authentication, software, and campus technology",
      "Troubleshot hardware, software, and network issues while documenting solutions through ServiceNow ticketing",
    ],
  },
];

export const certifications: Certification[] = [
  {
    icon: "/Emily-Portfolio/comptia-logo.png",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "Issued 2026",
    status: "active",
    url: "https://www.credly.com/earner/earned/badge/d59648ed-d1e4-4494-85b9-6add9b85d415",
  },
  {
    icon: "/Emily-Portfolio/comptia-logo.png",
    name: "CompTIA CySA+",
    issuer: "CompTIA",
    year: "Issued 2026",
    status: "active",
    url: "https://www.credly.com/earner/earned/badge/f03708d1-fd90-44f9-9255-c0e61e18d281",
  },
];

export const contactLinks = [
  { icon: "mail", label: "Email", href: "mailto:epj5179@psu.edu" },
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/emily-jao-wb01" },
  { icon: "github", label: "GitHub", href: "https://github.com/Aka005" },
];
