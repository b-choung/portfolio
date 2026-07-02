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
    skills: [
      "React",
      "Next.js",
      "Recoil",
      "SWR",
      "Tanstack Query",
      "Tailwind CSS",
      "styled-components",
      "SCSS",
      "Canvas API",
      "Chart.js",
      "Motion(Framer Motion)",
      "Three.js",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      "Git",
      "Jira",
      "Confluence",
      "Swagger",
      "Postman",
      "Netlify",
      "Claude Code",
      "GitHub Copilot",
      "Lighthouse",
      "Google Analytics",
      "Notion",
      "Figma",
      "Slack",
    ],
  },
];
