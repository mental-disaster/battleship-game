# 배틀쉽 게임

Next.js로 구현된 실시간 온라인 배틀쉽 게임입니다.

## 기술 스택

- **런타임**: Node.js v22.11.0
- **프레임워크**: [Next.js](https://nextjs.org) v15.3.3 (App Router)
- **언어**: TypeScript v5.0.0
- **상태 관리**: Zustand v5.0.5
- **스타일링**: 
  - Tailwind CSS v4.0.0
  - Shadcn/UI
- **실시간 통신**: Socket.IO v4.8.1
- **개발 도구**:
  - ESLint v9.0.0
  - Husky v9.1.7
  - Jest

## 프로젝트 구조

```
battleship-game/
├── src/
│   ├── app/                 # Next.js 앱 라우터
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   │   └── ui/              # 쉐이든 ui 컴포넌트
│   ├── core/                # 핵심 데이터
│   │   ├── constants/       # 상수
│   │   ├── data/            # 게임 데이터
│   │   └── types/           # 타입 정의
│   ├── lib/                 # 유틸리티 함수
│   └── store/               # Zustand 스토어
└── public/                # 정적 파일
```

## 개발 환경 설정

1. 저장소 클론
```bash
git clone https://github.com/mental-disaster/battleship-game.git
cd battleship-game
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 확인
```
http://localhost:3000
```

## 빌드 및 배포

### 빌드
```bash
npm run build
```

### 프로덕션 서버 실행
```bash
npm run start
```
