export type Projects = {
  order: number;
  featured: boolean;
  title: string;
  description: string;
  technologies: Array<string>;
  githubLink?: string;
  externalLink?: string;
};
