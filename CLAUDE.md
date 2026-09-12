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

## 디자인 컨셉: Modern Grotesque (2026-09-12부터, 이전 Editorial Kinetic에서 전환)

Linear/Vercel류 최신 프로덕트 사이트에서 영감을 받은, 타이포그래피와 여백의
완성도로 세련됨을 내는 컨셉. 장식 요소(오버사이즈 고스트 넘버, 이탤릭 세리프,
마퀴 티커 등)를 걷어내고 "절제된 화려함"에 집중합니다. 이전 시도(Dark Terminal의
네온+글래스모피즘, Editorial Kinetic의 장식 과다)는 둘 다 촌스럽다는 피드백으로
폐기되었으니 그 방향으로 되돌리지 않습니다.

- **테마**: 항상 다크모드 (토글 없음), 순수 블랙이 아닌 깊은 네이비 베이스
- **배경**: 딥 네이비(`--background`, oklch 기반) + 섹션마다 은은하게 번지는 블러 글로우 블롭(`GlowBlob`, `.glow-blob`). 그레인/그리드 패턴 없음
- **강조색**: 시그널 바이올렛 `--primary` 하나만 전역 CTA/링크/포커스에 사용. 그 외 섹션마다 부드러운 파스텔 톤 하나씩(`tone-violet/mint/peach/sky/rose/lavender`, `src/app/globals.css`)을 배지·타임라인 점·카드 호버 글로우에만 절제해서 사용 — 섹션 전체를 물들이지 않음
- **폰트**: `Space Grotesk`(헤드라인·넘버, `--font-display`) + `Inter`(본문/UI) + `JetBrains Mono`(캡션·메타데이터에만 아주 제한적으로 사용). 이탤릭·세리프 사용 금지
- **레이아웃**: 상단 고정 `NavBar`(스크롤 시 blur 배경 + 활성 섹션 하이라이트) + 히어로 CTA 버튼 2개(프로젝트 보기/이메일 보내기). 오버사이즈 장식 숫자 대신 작은 `index / 06` 텍스트와 `badge-pill` 배지로 섹션을 구분
- **카드**: `.surface` / `.surface-strong` (헤어라인 테두리, 블러 없음) + `.surface-hover`(hover 시 -3px 리프트 + 섹션 톤 컬러 글로우 섀도). 라운드는 `rounded-2xl`로 통일, `rounded-none` 같은 각진 스타일 금지. `.paper`/`.paper-strong`/`.index-num`/`.glass`/`.gradient-text`는 모두 제거되었으니 사용하지 않습니다
- **모션**: 스크롤 리빌(`Reveal`), 스크롤 속도 연동 키네틱 skewY(`KineticText`, Hero 이름에만 적용 — 남용 금지), 네이티브 View Transitions API 기반 프로젝트 카드↔상세 페이지 전환(`ViewTransitionLink`, `BackButton`), 데스크톱 전용 커스텀 커서(`CustomCursor`), 매그네틱 CTA 버튼(`Magnetic`) — 전부 외부 라이브러리 없이 구현되어 있고 `prefers-reduced-motion: reduce`에서 비활성화됨. 마퀴 티커는 사용하지 않음
- **히어로**: 배지 필(Frontend Developer) + 굵은 Space Grotesk 이름 + 롤 로테이터 + 바이올렛/스카이 글로우 블롭 + CTA 버튼 2개

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
