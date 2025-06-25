# MCP Example Server

Model Context Protocol (MCP) 파일 관리 서버입니다. 이 서버는 파일 읽기/쓰기 기능을 제공하는 MCP 도구들을 포함하고 있습니다.

## 개요

이 프로젝트는 MCP SDK를 사용하여 구축된 예제 서버로, AI 모델이 로컬 파일 시스템과 상호작용할 수 있도록 하는 도구들을 제공합니다. 현재 `files/` 디렉토리 내에서 텍스트 파일을 읽고 쓰는 기능을 지원합니다.

## 기능

### 도구 (Tools)

- **writeFile**: 텍스트 파일을 작성합니다
  - 매개변수: `fileName` (문자열), `content` (문자열)
  - 파일을 `files/` 디렉토리에 저장합니다

- **readFile**: 텍스트 파일을 읽습니다
  - 매개변수: `fileName` (문자열)
  - `files/` 디렉토리에서 파일을 읽어옵니다

## 프로젝트 구조

```
mcp/
├── package.json          # 프로젝트 설정 및 의존성
├── tsconfig.json         # TypeScript 설정
├── src/                  # 소스 코드
│   ├── index.ts          # 메인 서버 진입점
│   └── file/
│       └── tools.ts      # 파일 관련 도구 구현
└── files/                # 파일 저장 디렉토리
    └── hello.txt         # 예제 파일
```

## 설치 및 실행

### 사전 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 모드 실행

```bash
# TypeScript 빌드 및 서버 시작 (Inspector와 함께)
npm start
```

또는 단계별로:

```bash
# TypeScript 컴파일
npm run build

# 서버 실행
node dist/index.js
```

## 기술 스택

- **TypeScript**: 타입 안전성을 위한 JavaScript 슈퍼셋
- **@modelcontextprotocol/sdk**: MCP 서버 구현을 위한 공식 SDK
- **Zod**: 런타임 타입 검증 라이브러리
- **Node.js**: 서버 런타임 환경

## 사용 예제

### 파일 작성 예제

```typescript
// writeFile 도구 사용
{
  "fileName": "example.txt",
  "content": "안녕하세요, 이것은 예제 파일입니다."
}
```

### 파일 읽기 예제

```typescript
// readFile 도구 사용
{
  "fileName": "example.txt"
}
```

## MCP Inspector 사용

MCP Inspector를 사용하여 서버를 테스트하고 디버깅할 수 있습니다:

```bash
npm start
```

이 명령은 서버를 빌드하고 MCP Inspector와 함께 실행합니다.

## 라이선스

ISC

## 기여

이 프로젝트는 MCP 학습 및 실험 목적으로 만들어졌습니다. 개선사항이나 버그 리포트는 언제든 환영합니다.

## 참고 자료

- [Model Context Protocol 공식 문서](https://modelcontextprotocol.io/)
- [MCP SDK GitHub 저장소](https://github.com/modelcontextprotocol/typescript-sdk)
