export type EducationCategory = "degree" | "course" | "certificate";

export interface Education {
  id: string;
  institution: string;
  title: string;
  category: EducationCategory;
  period: string;
  description?: string;
}
