import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unicorn from "eslint-plugin-unicorn";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // 팀 규칙: 파일 이름은 전부 소문자-하이픈 (study-card.tsx, use-like-state.ts)
  {
    plugins: { unicorn },
    rules: {
      "unicorn/filename-case": [
        "error",
        // [studyId] 같은 주소 변수 폴더는 예외
        { case: "kebabCase", ignore: [/^\[.+\]$/] },
      ],
    },
  },
  // 모양(띄어쓰기 · 따옴표)은 Prettier가 맡으니 ESLint와 겹치는 규칙은 끔 — 항상 맨 끝
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
