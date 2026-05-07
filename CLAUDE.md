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

## 디자인 컨셉: Dark Terminal

- **테마**: 항상 다크모드 (토글 없음)
- **배경**: 딥 블랙 (`#0a0a0a`) + 미묘한 그린 그리드 패턴
- **강조색**: 터미널 그린 `#00ff88` (primary), 청록 `#00ccff` (accent)
- **폰트**: `Inter` (본문/헤딩), `JetBrains Mono` (코드/모노)
- **카드**: `.glass` / `.glass-strong` — 반투명 + backdrop-blur + 그린 테두리
- **텍스트**: `.gradient-text` — 그린→청록 그라데이션
- **헤로**: 코드 스타일 자기소개 (const name = "...", $ 커서 깜박임)

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
