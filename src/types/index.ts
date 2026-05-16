import type { IconType } from "react-icons/lib";

export type ProjectCategory = 'frontend' | 'fullstack' | 'backend';
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string 
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  techStack: string[];
  bullets: string[];
}

export type SkillLevel = 'expert' | 'proficient' | 'familiar';

export interface SkillGroup {
  name: string;
  icone: IconType;
  color: string;
}

export type EduType = 'degree' | 'certification';

export interface EducationItem {
  id: string;
  type: EduType;
  name: string;
  institution: string;
  date: string;
  icon: string;
}

export type CodeTokenType =
  | 'kw'
  | 'fn'
  | 'str'
  | 'cmt'
  | 'tag'
  | 'prop'
  | 'n'
  | 'br';

export interface CodeToken {
  t: CodeTokenType;
  v: string;
}

export interface CodeSnippet {
  id: string;
  label: string;
  description: string;
  tokens: CodeToken[];
  // No previewHtml — preview is a React component in PlaygroundPreviews.tsx
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
