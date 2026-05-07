import { Education } from "@/types/education";

export const educations: Education[] = [
  {
    id: "edu-1",
    institution: "○○대학교",
    title: "컴퓨터공학과 학사",
    category: "degree",
    period: "2018.03 – 2022.02",
    description: "자료구조, 알고리즘, 웹 프로그래밍 등을 전공했습니다.",
  },
  {
    id: "edu-2",
    institution: "○○ 부트캠프",
    title: "프론트엔드 개발 과정",
    category: "course",
    period: "2022.03 – 2022.08",
    description: "React 기반 프론트엔드 집중 과정을 수료했습니다.",
  },
  {
    id: "edu-3",
    institution: "정보처리기사",
    title: "정보처리기사",
    category: "certificate",
    period: "2021.11",
  },
];
