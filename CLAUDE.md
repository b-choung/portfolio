# PORTFOLIO

## 프로젝트 개요

프론트엔드 개발자 포트폴리오 웹사이트입니다.

## 기술 스택

- Next.js 15
- React 19
- Tailwind 4
- shadcn/ui
- Typescript
- react-icons (아이콘)

## 중요 규칙

- UI는 shadcn/ui로 통일합니다.
- Local Storage만 사용합니다.
- 로그인/인증은 금지합니다.
- 데이터베이스는 사용하지 않습니다.
- 단일 컴포넌트 200줄 초과를 금지합니다. (초과시 컴포넌트 분리)

## 디자인 컨셉: Editorial Kinetic

잡지 편집 디자인 문법(에디토리얼 그리드, 세리프 헤드라인, 인덱스 넘버링) +
스크롤에 반응하는 키네틱 타이포 모션을 결합한 컨셉. 그린/시안 네온 + 글래스모피즘
+ 모노스페이스 터미널 조합("AI가 만든 포트폴리오" 클리셰)은 사용하지 않습니다.

- **테마**: 항상 다크모드 (토글 없음), 순수 블랙이 아닌 따뜻한 잉크 블랙 베이스
- **배경**: 잉크 블랙 (`--background`, oklch 기반 warm black) + 은은한 그레인(노이즈) 텍스처. 그리드 패턴 금지
- **강조색**: 시그널 레드-오렌지 `--primary` (잉크 포인트 컬러) 단색 강조. 그라데이션 텍스트/버튼 금지 — 컬러는 절제하고 타이포와 레이아웃으로 화려함을 표현
- **폰트**: `Fraunces`(세리프, 헤드라인·인덱스 넘버) + `Inter`(본문/UI) + `JetBrains Mono`(캡션·메타데이터에 아주 제한적으로만 사용, 터미널 프롬프트 스타일 금지)
- **레이아웃**: 비대칭 에디토리얼 그리드, 섹션마다 큰 고스트 인덱스 넘버(`01`, `02`…), 헤어라인(1px) 구분선. `.glass`/`.glass-strong`/`.gradient-text` 유틸리티는 제거되었으니 사용하지 않습니다
- **모션**: 스크롤 인터섹션 기반 리빌 애니메이션(`Reveal` 컴포넌트), 마퀴 티커, 잉크 언더라인 호버(`.ink-underline`) — 외부 애니메이션 라이브러리 추가 없이 CSS + IntersectionObserver로 구현
- **키네틱 타이포**: `KineticText` 컴포넌트 — 스크롤 속도에 비례해 헤드라인이 순간적으로 skewY 되었다가 감쇠하며 복귀 (Hero 이름, `SectionHeader` 제목에 적용)
- **페이지 전환**: `ViewTransitionLink` — 프로젝트 카드 → 상세 페이지 이동 시 네이티브 브라우저 View Transitions API(`document.startViewTransition`)로 제목이 같은 자리에서 모프. `BackButton`도 동일 API로 복귀 전환. 미지원 브라우저는 자동으로 일반 네비게이션으로 폴백
- **커스텀 커서**: `CustomCursor` — 데스크톱(`pointer: fine`)에서만 활성화되는 링 커서, 링크/버튼 위에서 확대(`.cursor-dot`)
- **매그네틱 버튼**: `Magnetic` 컴포넌트 — 커서가 가까이 가면 버튼이 살짝 끌려오는 효과 (Contact CTA에 적용)
- **접근성**: 위 모션 전부 `prefers-reduced-motion: reduce`에서 비활성화/즉시 종료 처리
- **헤로**: 매거진 표지 스타일 마스트헤드 (호수/인덱스 라벨 + 거대한 세리프 이름 + 롤 로테이터)

## 파일 구조

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── [page]/
│       ├── page.tsx
├── components/
│   ├── ui/
│   ├── common/
│   └── [page]/
├── data/
├── types/
└── lib/
```
