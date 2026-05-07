import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "company-1",
    title: "사내 관리자 대시보드",
    description:
      "실시간 데이터 시각화와 사용자 권한 관리를 포함한 백오피스 시스템입니다. 복잡한 테이블 필터링과 차트 렌더링 성능을 최적화했습니다.",
    category: "company",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "React Query"],
    period: "2024.03 – 2024.09",
  },
  {
    id: "company-2",
    title: "고객 모바일 앱 리뉴얼",
    description:
      "기존 네이티브 앱을 React Native로 전환하는 프로젝트입니다. 상태 관리 구조 개선과 앱 시작 시간을 40% 단축했습니다.",
    category: "company",
    techStack: ["React Native", "TypeScript", "Zustand", "React Query"],
    period: "2023.07 – 2024.02",
  },
  {
    id: "company-3",
    title: "이커머스 프론트엔드 구축",
    description:
      "신규 쇼핑몰 서비스의 프론트엔드를 처음부터 설계하고 개발했습니다. SEO 최적화와 Core Web Vitals 개선에 집중했습니다.",
    category: "company",
    techStack: ["Next.js", "TypeScript", "Tanstack Query", "Zustand"],
    deployUrl: "https://example.com",
    period: "2022.11 – 2023.06",
  },
  {
    id: "personal-1",
    title: "포트폴리오 웹사이트",
    description:
      "현재 보고 계신 이 웹사이트입니다. Next.js 15와 shadcn/ui를 사용해 Glassmorphism 컨셉으로 직접 디자인하고 개발했습니다.",
    category: "personal",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com",
    deployUrl: "https://example.com",
    period: "2025.05 –",
  },
  {
    id: "personal-2",
    title: "날씨 대시보드",
    description:
      "OpenWeatherMap API를 연동한 날씨 앱입니다. 위치 기반 현재 날씨와 7일 예보를 제공하며, 도시 검색 기능을 구현했습니다.",
    category: "personal",
    techStack: ["React", "Vite", "TypeScript", "OpenWeather API"],
    githubUrl: "https://github.com",
    deployUrl: "https://example.com",
    period: "2024.12",
  },
  {
    id: "personal-3",
    title: "칸반 보드 앱",
    description:
      "드래그앤드롭으로 작업을 관리할 수 있는 칸반 보드입니다. LocalStorage에 데이터를 저장하며 커스텀 훅으로 상태 로직을 분리했습니다.",
    category: "personal",
    techStack: ["React", "TypeScript", "dnd-kit", "Zustand"],
    githubUrl: "https://github.com",
    period: "2024.10",
  },
];
