import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "○○ 회사",
    role: "Frontend Developer",
    period: "2022.11 – 현재",
    current: true,
    description:
      "React / Next.js 기반의 웹 서비스 개발을 담당하고 있습니다. 신규 이커머스 프론트엔드 구축, 관리자 대시보드 개발, 모바일 앱 리뉴얼 프로젝트에 참여했습니다.",
    techStack: ["React", "Next.js", "TypeScript", "React Native"],
  },
  {
    id: "exp-2",
    company: "△△ 스타트업",
    role: "Frontend Developer (인턴)",
    period: "2022.03 – 2022.08",
    description:
      "사용자 대면 서비스의 UI 개발 및 유지보수를 담당했습니다. 컴포넌트 라이브러리 도입과 코드 품질 개선에 기여했습니다.",
    techStack: ["React", "JavaScript", "Styled Components"],
  },
];
