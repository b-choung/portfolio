export type ProjectCategory = "company" | "personal";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  category: ProjectCategory;
  techStack: string[];
  githubUrl?: string;
  deployUrl?: string;
  period: string;
  images?: string[];
}
