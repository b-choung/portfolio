import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "maxst",
    company: "맥스트",
    role: "프론트엔드 개발자 / 선임",
    period: "2021.10 – 2024.09 (3년)",
    current: false,
    description:
      "메타버스 서비스 '틀로나' 프로젝트와 AR 네비게이션 서비스의 어드민 페이지 개발을 담당했습니다.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Canvas API",
      "Three.js",
      "Tailwind CSS",
      "Recoil",
      "SWR",
    ],
  },
  {
    id: "stockfolio",
    company: "스톡폴리오",
    role: "프론트엔드 개발자 / 인턴",
    period: "2021.08 – 2021.09 (2개월)",
    description: "랜딩 페이지 및 채용 페이지 개발을 진행했습니다.",
    techStack: ["React", "JavaScript", "Styled Components", "MobX"],
  },
  {
    id: "stunitas",
    company: "에스티유니타스",
    role: "콘텐츠 기획자 / 사원(비개발)",
    period: "2019.03 – 2019.09 (6개월)",
    description: "교육 앱 '커넥츠'의 콘텐츠 기획 및 운영을 담당했습니다.",
  },
];
