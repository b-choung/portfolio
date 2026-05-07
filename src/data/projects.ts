import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "company-1",
    title: "사내 관리자 대시보드",
    description:
      "실시간 데이터 시각화와 사용자 권한 관리를 포함한 백오피스 시스템입니다.",
    longDescription:
      "수십 명의 내부 운영팀이 사용하는 백오피스 시스템으로, 실시간 주문 현황, 사용자 통계, 권한 기반 접근 제어를 제공합니다. 기존 레거시 어드민을 React로 전면 재구축하며 개발 생산성과 운영 효율을 동시에 개선했습니다.",
    highlights: [
      "Recharts 기반 실시간 대시보드 구현, 차트 렌더링 성능 60% 개선",
      "Role-Based Access Control(RBAC) 설계 및 구현",
      "복잡한 다중 조건 테이블 필터링 컴포넌트 공통화",
      "React Query로 서버 상태 관리 일원화, 불필요한 API 호출 40% 감소",
    ],
    category: "company",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "React Query"],
    period: "2024.03 – 2024.09",
  },
  {
    id: "company-2",
    title: "고객 모바일 앱 리뉴얼",
    description:
      "기존 네이티브 앱을 React Native로 전환하는 프로젝트입니다.",
    longDescription:
      "iOS/Android 각각 유지되던 네이티브 앱을 React Native 단일 코드베이스로 통합했습니다. 앱 시작 시간 단축과 번들 사이즈 최적화를 주도하며, 크로스플랫폼 전환 이후에도 네이티브 수준의 UX를 유지하는 데 집중했습니다.",
    highlights: [
      "앱 콜드 스타트 시간 40% 단축 (lazy import, Hermes 엔진 활용)",
      "Zustand로 전역 상태 구조 재설계, 불필요한 리렌더링 제거",
      "공통 디자인 시스템 컴포넌트 30개 이상 설계 및 문서화",
      "QA 배포 자동화 파이프라인 구성 (GitHub Actions + Fastlane)",
    ],
    category: "company",
    techStack: ["React Native", "TypeScript", "Zustand", "React Query"],
    period: "2023.07 – 2024.02",
  },
  {
    id: "company-3",
    title: "이커머스 프론트엔드 구축",
    description:
      "신규 쇼핑몰 서비스의 프론트엔드를 처음부터 설계하고 개발했습니다.",
    longDescription:
      "신규 이커머스 서비스 런칭을 위해 프론트엔드 아키텍처를 설계하고 핵심 기능을 개발했습니다. SEO가 중요한 서비스 특성에 맞춰 Next.js App Router 기반의 서버 컴포넌트 구조를 적극 활용했습니다.",
    highlights: [
      "Next.js App Router 기반 SSR/SSG 혼합 전략으로 LCP 1.8초 달성",
      "Tanstack Query 무한 스크롤 + 낙관적 업데이트 패턴 적용",
      "상품 상세, 장바구니, 결제 플로우 전 구간 개발",
      "Core Web Vitals 전 지표 Green 달성",
    ],
    category: "company",
    techStack: ["Next.js", "TypeScript", "Tanstack Query", "Zustand"],
    deployUrl: "https://example.com",
    period: "2022.11 – 2023.06",
  },
  {
    id: "personal-1",
    title: "포트폴리오 웹사이트",
    description:
      "현재 보고 계신 이 웹사이트입니다. Next.js 15와 shadcn/ui로 직접 디자인하고 개발했습니다.",
    longDescription:
      "Dark Terminal 컨셉으로 직접 디자인하고 개발한 포트폴리오입니다. 외부 데이터베이스 없이 로컬 데이터만으로 구성하며, 코드 품질과 컴포넌트 설계에 집중했습니다.",
    highlights: [
      "Next.js 15 App Router + React 19 기반 구축",
      "Tailwind CSS 4 + shadcn/ui로 디자인 시스템 구성",
      "단일 컴포넌트 200줄 제한 규칙 준수로 유지보수성 확보",
    ],
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
      "OpenWeatherMap API를 연동한 날씨 앱. 위치 기반 현재 날씨와 7일 예보를 제공합니다.",
    longDescription:
      "OpenWeatherMap API를 활용해 현재 위치의 날씨와 7일 예보를 시각적으로 보여주는 앱입니다. Geolocation API로 위치를 자동 감지하고, 도시 이름 검색도 지원합니다.",
    highlights: [
      "Geolocation API로 현재 위치 자동 감지",
      "날씨 상태에 따라 배경 테마가 동적으로 변경",
      "커스텀 훅으로 API 페칭 로직 분리 및 로딩/에러 상태 처리",
    ],
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
      "드래그앤드롭으로 작업을 관리할 수 있는 칸반 보드. LocalStorage로 데이터를 유지합니다.",
    longDescription:
      "Trello에서 영감을 받아 만든 칸반 보드입니다. 컬럼과 카드를 자유롭게 추가하고 드래그앤드롭으로 순서를 변경할 수 있습니다. 새로고침 후에도 데이터가 유지되도록 LocalStorage에 상태를 동기화했습니다.",
    highlights: [
      "dnd-kit으로 컬럼 간 카드 이동 및 컬럼 순서 변경 구현",
      "Zustand + LocalStorage 미들웨어로 영구 상태 저장",
      "낙관적 UI 업데이트로 드래그 중 즉각적인 피드백 제공",
    ],
    category: "personal",
    techStack: ["React", "TypeScript", "dnd-kit", "Zustand"],
    githubUrl: "https://github.com",
    period: "2024.10",
  },
];
