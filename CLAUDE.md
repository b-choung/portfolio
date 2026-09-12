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

## 디자인 컨셉: Modern Grotesque

Linear/Vercel류 다크 프로덕트 사이트 레퍼런스. 장식보다 타이포·여백·인터랙션
완성도로 세련됨을 냅니다. (과거 Dark Terminal/Editorial Kinetic 컨셉은 장식
과다로 반려되어 폐기 — 재도입 금지)

- **테마/색**: 항상 다크모드(토글 없음), 딥 네이비 베이스. 강조색은 바이올렛 `--primary` 하나만 전역 사용, 섹션별 파스텔 톤(`tone-*`, `globals.css`)은 배지·글로우 등 작은 면적에만
- **폰트**: `Space Grotesk`(헤드라인) + `Inter`(본문) + `JetBrains Mono`(캡션 한정). 이탤릭·세리프 금지
- **레이아웃**: 상단 고정 `NavBar` + `GlowBlob` 배경 글로우. 오버사이즈 장식 숫자·마퀴 티커 금지
- **카드**: `.surface`/`.surface-strong` + `.surface-hover`, `rounded-2xl` 통일 (`rounded-none`, `.paper*`, `.glass*`, `.gradient-text` 금지)
- **모션**: `Reveal`(스크롤 리빌), `KineticText`(Hero 전용, 남용 금지), `ViewTransitionLink`/`BackButton`, `CustomCursor`, `Magnetic` — 전부 외부 라이브러리 없이 구현, `prefers-reduced-motion`에서 비활성화

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
