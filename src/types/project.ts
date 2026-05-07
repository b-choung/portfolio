export type ProjectCategory = "company" | "personal";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  githubUrl?: string;
  deployUrl?: string;
  period: string;
}
