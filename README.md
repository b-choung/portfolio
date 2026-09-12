# Portfolio

🔗 [https://bchoung.netlify.app/](https://bchoung.netlify.app/)

프론트엔드 개발자 포트폴리오 웹사이트. Modern Grotesque 컨셉 — 딥 네이비 다크 테마와
바이올렛 단일 강조색, 절제된 타이포·여백으로 구성했습니다.

## 기술 스택

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 · shadcn/ui (base-ui)
- react-icons

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 접속.

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 구조

```
src/
├── app/            # 라우트 (홈, 프로젝트 상세)
├── components/     # ui / common / 섹션별 컴포넌트
├── data/           # 개인정보·프로젝트·경력 등 콘텐츠
├── types/
└── lib/
```

콘텐츠 수정은 `src/data/` 파일만 편집하면 됩니다.

## 규칙

- UI는 shadcn/ui로 통일, 로그인·DB 없이 LocalStorage만 사용
- 컴포넌트 1개 200줄 초과 금지

자세한 디자인/코딩 컨벤션은 [CLAUDE.md](./CLAUDE.md) 참고.
