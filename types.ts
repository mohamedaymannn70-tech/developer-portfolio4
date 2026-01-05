
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  image?: string;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  button?: string;
}

export interface BookPage {
  title: string;
  content: string;
}

export interface BookContent {
  close: string;
  next: string;
  prev: string;
  pages: BookPage[];
}

export interface Content {
  nav: {
    home: string;
    about: string;
    skills: string;
    tools: string;
    projects: string;
    contact: string;
  };
  hero: {
    role: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  about: {
    title: string;
    text: string;
    stats: { label: string; value: string }[];
  };
  skills: {
    title: string;
    subtitle: string;
  };
  tools: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    liveDemo: string;
    items: Project[];
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
  };
  book: BookContent;
  footer: {
    copyright: string;
  };
}
