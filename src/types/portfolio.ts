export type Locale = "en" | "vi";

export type Theme = "dark" | "light";

export type ProjectCategory =
  | "e-learning"
  | "e-commerce"
  | "landing-page";

export interface LocalizedText {
  en: string;
  vi: string;
}

export interface NavigationItem {
  id: "home" | "about" | "skills" | "projects" | "experience" | "contact";
  label: LocalizedText;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  initials: string;
  role: LocalizedText;
  bio: LocalizedText;
  email: string;
  github: string;
  linkedin: string;
  zalo: string;
  phone: string;
  phoneDisplay: string;
  location: LocalizedText;
  resumeUrl: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: LocalizedText;
  detail: LocalizedText;
}

export interface SkillGroup {
  id: "frontend" | "backend" | "devops";
  category: LocalizedText;
  description: LocalizedText;
  items: readonly string[];
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedText;
  startDate: string;
  endDate: LocalizedText;
  description: {
    en: readonly string[];
    vi: readonly string[];
  };
  techStack: readonly string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  techStack: readonly string[];
  githubUrl: string;
  liveUrl: string;
}

export interface ArchiveProject {
  id: string;
  title: string;
  url: string;
  techStack: readonly string[];
}

export interface SectionHeadingCopy {
  eyebrow: LocalizedText;
  title: LocalizedText;
  accent: LocalizedText;
  description: LocalizedText;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  navigation: readonly NavigationItem[];
  common: {
    skipToContent: LocalizedText;
    switchLanguage: LocalizedText;
    switchToDark: LocalizedText;
    switchToLight: LocalizedText;
    darkTheme: LocalizedText;
    lightTheme: LocalizedText;
    openMenu: LocalizedText;
    closeMenu: LocalizedText;
    opensNewTab: LocalizedText;
    copyEmail: LocalizedText;
    copied: LocalizedText;
    backToTop: LocalizedText;
  };
  hero: {
    availability: LocalizedText;
    eyebrow: LocalizedText;
    headline: LocalizedText;
    headlineAccent: LocalizedText;
    rotatingRoles: { en: readonly string[]; vi: readonly string[] };
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    codeWindowTitle: string;
    codeLines: { en: readonly string[]; vi: readonly string[] };
  };
  about: SectionHeadingCopy & {
    careerSummary: LocalizedText;
    approachTitle: LocalizedText;
    approachItems: readonly { title: LocalizedText; description: LocalizedText }[];
    locationLabel: LocalizedText;
  };
  stats: readonly Statistic[];
  skillsSection: SectionHeadingCopy;
  skills: readonly SkillGroup[];
  projectsSection: SectionHeadingCopy & {
    filters: readonly {
      id: "all" | ProjectCategory;
      label: LocalizedText;
    }[];
    featuredLabel: LocalizedText;
    liveDemo: LocalizedText;
    sourceCode: LocalizedText;
    archiveTitle: LocalizedText;
    archiveDescription: LocalizedText;
    archiveColumns: {
      project: LocalizedText;
      stack: LocalizedText;
      link: LocalizedText;
    };
  };
  projects: readonly Project[];
  archiveProjects: readonly ArchiveProject[];
  experienceSection: SectionHeadingCopy & {
    currentRole: LocalizedText;
    responsibilities: LocalizedText;
    coreStack: LocalizedText;
  };
  experiences: readonly Experience[];
  contact: SectionHeadingCopy & {
    responseTime: LocalizedText;
    directContact: LocalizedText;
    emailLabel: LocalizedText;
    zaloLabel: LocalizedText;
    formTitle: LocalizedText;
    fields: {
      name: { label: LocalizedText; placeholder: LocalizedText };
      email: { label: LocalizedText; placeholder: LocalizedText };
      subject: { label: LocalizedText; placeholder: LocalizedText };
      message: { label: LocalizedText; placeholder: LocalizedText };
    };
    submit: LocalizedText;
    submitting: LocalizedText;
    successTitle: LocalizedText;
    successMessage: LocalizedText;
    errorMessage: LocalizedText;
    validation: {
      name: LocalizedText;
      email: LocalizedText;
      subject: LocalizedText;
      message: LocalizedText;
    };
  };
  footer: {
    headline: LocalizedText;
    description: LocalizedText;
    cta: LocalizedText;
    navigationTitle: LocalizedText;
    connectTitle: LocalizedText;
    copyright: LocalizedText;
    builtWith: LocalizedText;
  };
}
