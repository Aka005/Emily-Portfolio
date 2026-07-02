export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  icon: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  placeholder?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  current?: boolean;
}

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status: "active" | "pending" | "planned";
  icon: string;
  url?: string;
};