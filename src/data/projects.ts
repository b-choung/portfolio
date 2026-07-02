import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "포트폴리오 웹사이트",
    description:
      "현재 보고 계신 이 웹사이트입니다. Next.js 기반으로 Claude AI를 활용해 개발했습니다.",
    longDescription:
      "Dark Terminal 컨셉으로 디자인하고 개발한 포트폴리오입니다.",
    highlights: [
      "Next.js 15 App Router + React 19 기반 구축",
      "Tailwind CSS 4 + shadcn/ui로 디자인 시스템 구성",
      "Claude AI로 콘텐츠 작성",
    ],
    category: "personal",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/b-choung/portfolio",
    period: "2026.05 – 진행 중",
  },
  {
    id: "minihub",
    title: "MiniHub - 미니앱 모음",
    description: "바이브 코딩으로 만든 미니앱들을 모아둔 프로젝트입니다.",
    longDescription:
      "바이브 코딩을 경험해보고자 만든 미니앱 모음 프로젝트입니다. 칸반 보드 스타일의 태스크 보드부터 타이머, 목표 추적, 기분 기록, 꽃 추천, 메모, 랜덤 플랜까지 다양한 기능을 가진 미니앱들을 Next.js로 구현하여, 프론트엔드 개발의 다양한 측면을 탐구하는 데 중점을 두었습니다.",
    highlights: [
      "Task Board / Timer / Goal Tracker / Mood Tracker / Flower Picks / Memo / Random Plan",
      "Claude AI로 프로젝트 기획 및 콘텐츠 작성",
    ],
    category: "personal",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Anthropic SDK",
    ],
    deployUrl: "https://minihub-b.netlify.app/",
    githubUrl: "https://github.com/b-choung/minihub",
    period: "2026.04 – 진행 중",
    images: ["/images/projects/minihub.png"],
  },
  {
    id: "tlona",
    title: "틀로나",
    description:
      "B2C 메타버스 플랫폼 '틀로나'의 서비스 페이지와 어드민 대시보드를 구현 및 유지보수한 프로젝트입니다.",
    longDescription:
      "B2C 메타버스 플랫폼 '틀로나'의 서비스 페이지와 어드민(CMS) 개발 전반을 담당했습니다. 서비스 페이지는 Next.js와 React Three Fiber(Three.js) 기반으로 3D 아바타 커스터마이징을 구현하고, Ready Player Me SDK를 연동해 아바타 생성·편집 경험을 제공했습니다. i18next 기반 다국어 지원과 Framer Motion·React Spring을 활용한 인터랙션으로 몰입감 있는 UX를 구성했으며, 어드민은 React Table과 Chart.js 기반의 데이터 관리 화면으로 운영 효율을 높였습니다. 프로젝트 초기 프론트엔드 단독 구축으로 시작해 파트가 4명으로 확장되는 동안 개발 가이드 문서화와 PoC 등을 진행했습니다.",
    highlights: [
      "React Three Fiber(Three.js) 기반 3D 아바타 커스터마이징 및 애니메이션 인터랙션 구현으로 서비스 핵심 기능의 시각적 완성도 확보",
      "Ready Player Me SDK 연동으로 아바타 생성·편집 플로우 구축",
      "i18next 기반 다국어(i18n) 지원 및 Framer Motion·React Spring 활용 인터랙션으로 서비스 UX 고도화",
      "React Table 기반 어드민(CMS) 대시보드 개발로 운영팀의 데이터 접근성 및 관리 효율 향상",
      "Recoil·SWR로 전역 상태와 서버 데이터를 관리하고, 반응형·크로스 브라우징 대응 및 퍼포먼스 최적화로 Lighthouse 주요 지표 평균 90점 이상 달성",
      "기획·디자인팀과 협업하여 요구사항을 기술 스펙으로 구체화하고 UI/UX 개선 사항을 주도적으로 구현",
    ],
    category: "company",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recoil",
      "SWR",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "i18next",
      "React Table",
      "Chart.js",
    ],
    period: "2022.02 – 2024.09",
  },
  {
    id: "alice-admin",
    title: "AR 네비게이션 어드민",
    description:
      "자바로 개발된 AR 네비게이션 서비스의 어드민 페이지를 React로 리뉴얼한 프로젝트입니다.",
    longDescription:
      "AR 네비게이션 서비스의 어드민 페이지를 React로 리뉴얼하여 유지보수성과 사용자 경험을 개선한 프로젝트입니다. 기존 자바 기반 어드민의 복잡한 코드베이스와 낮은 생산성 문제를 해결하기 위해, React와 Recoil로 프론트엔드 아키텍처를 재구성했습니다. 주요 기능으로는 지도 기반 POI 관리, 트래픽 모니터링 대시보드, 사용자 피드백 관리 시스템 등이 있으며, 이를 통해 운영팀의 업무 효율성과 데이터 접근성을 크게 향상시켰습니다.",
    highlights: [
      "어드민 페이지 전면 리뉴얼을 단독으로 담당, 프론트엔드 구조 설계부터 구현까지 전 과정 수행",
      "Canvas API를 활용해 지도 위 AR 경로·POI를 시각화, 기존 텍스트·테이블 중심 관리에서 직관적인 시각적 관리 환경으로 전환",
      "AR POI·경로·사용자 관리 기능 및 상태 기반 인터랙션 설계로 운영 흐름 개선",
      "데이터 필터·정렬·검색 기능 도입으로 대량 데이터 관리 효율 및 가독성 향상",
      "공통 UI 컴포넌트 설계로 페이지 간 일관성 확보, 반응형·크로스 브라우징 대응 및 렌더링 최적화로 페이지 안정성과 반응성 개선",
    ],
    category: "company",
    techStack: [
      "React",
      "JavaScript",
      "Recoil",
      "styled-components",
      "Canvas API",
      "React Table",
    ],
    period: "2021.11 – 2022.02",
  },
  {
    id: "stockfolio",
    title: "랜딩/채용 페이지",
    description:
      "기업의 서비스를 소개하는 랜딩 페이지와 인재 채용을 위한 채용 페이지를 개발한 프로젝트입니다.",
    longDescription:
      "기업의 랜딩 페이지와 채용 페이지 개발 프로젝트로, React와 MobX를 활용하여 사용자 친화적이고 시각적으로 매력적인 웹 페이지를 구현했습니다. 랜딩 페이지에서는 서비스의 주요 기능과 가치를 효과적으로 전달하기 위해 인터랙티브한 UI 요소와 애니메이션을 도입했으며, 채용 페이지에서는 지원자들이 쉽게 정보를 탐색하고 지원할 수 있도록 직관적인 레이아웃과 필터링 기능을 구현했습니다. 이 프로젝트를 통해 프론트엔드 개발 역량을 강화하고, 사용자 경험을 개선하는 방법을 배웠습니다.",
    highlights: [
      "MobX를 활용한 상태 관리 및 단계별 폼 데이터 입력 구현",
      "로그인 로직 개선 및 FormData 기반 파일 업로드 기능 구현으로 사용자 입력 과정 안정화",
      "캐러셀·모달 등 인터랙티브 UI 구현 및 공통 컴포넌트 설계로 코드 구조 일관성 확보",
    ],
    category: "company",
    techStack: ["React", "JavaScript", "MobX", "styled-components"],
    period: "2021.08 – 2021.09",
  },
  {
    id: "22percent",
    title: "P2P 대출 서비스",
    description: "금융 데이터를 시각적으로 제공하는 웹 애플리케이션입니다.",
    longDescription:
      "P2P 대출 서비스를 제공하는 8퍼센트를 모티브로 하여시각화된 금융 데이터를 제공하고자 진행한 프로젝트입니다.",
    highlights: [
      "로그인 유저별 투자 현황을 원형 차트·레이블로 시각화하여 데이터 가독성 향상",
      "재사용 가능한 상품 카드 컴포넌트 설계 및 필터·정렬 기능 구현",
      "양방향 레인지 슬라이더·이미지 캐러셀·장바구니 이동 등 사용자 인터랙션 구현",
      "페이지네이션·로딩 스피너 적용으로 네트워크 요청 흐름 개선",
    ],
    category: "personal",
    techStack: ["React", "styled-components", "Chart.js", "Kakao Login"],
    githubUrl:
      "https://github.com/wecode-bootcamp-korea/22-2nd-22percent-frontend",
    period: "2021.07",
    images: ["/images/projects/22percent.png"],
  },
  {
    id: "mango-peace",
    title: "위치 기반 맛집 추천",
    description:
      "사용자의 위치를 기반으로 주변 맛집을 추천해주는 웹 애플리케이션입니다. KakaoMap API로 지도와 위치 데이터를 활용했습니다.",
    longDescription:
      "망고 플레이트에서 영감을 받아 만든 위치 기반 맛집 추천 웹 애플리케이션입니다. KakaoMap API를 활용하여 사용자의 위치를 기반으로 주변 맛집을 추천해줍니다. 외부 라이브러리를 최소화하고 React와 SCSS로 직접 UI를 구현하여, 사용자 친화적인 인터페이스와 원활한 사용자 경험을 제공하는 데 중점을 두었습니다. 프론트엔드 3인, 백엔드 3인으로 구성된 팀 프로젝트였으며, 프론트엔드 리드 역할을 맡아 개발을 주도했습니다.",
    highlights: [
      "KakaoMap API로 위치 기반 매장 위치 시각화",
      "REST API 연동으로 유저 위시리스트·댓글 기능 구현",
      "리뷰 필터링·이미지 캐러셀 등 상세 페이지 UI 인터랙션 개발",
      "디바운싱 기반 검색 기능 구현으로 불필요한 API 요청 최소화",
      "React Router 기반 페이지 구성 및 AWS S3 배포",
    ],
    category: "personal",
    techStack: ["React", "SCSS", "KakaoMap API"],
    githubUrl:
      "https://github.com/wecode-bootcamp-korea/22-1st-mangoPeace-frontend",
    period: "2021.07",
    images: ["/images/projects/mango.png"],
  },
];
