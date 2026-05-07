import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "language",
    label: "Language",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: "state",
    label: "State & Data",
    skills: ["Zustand", "React Query", "Tanstack Query"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Figma", "Vite", "VS Code"],
  },
];
