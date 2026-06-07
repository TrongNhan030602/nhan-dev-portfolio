export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ArchiveProject {
  id: string;
  title: string;
  url: string;
  techStack: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    zalo: string;
  };
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  archiveProjects: ArchiveProject[];
}