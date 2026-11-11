"use server";

import { getCurrentUser } from "@/lib/current-user";

// 팀 규칙: 화면 → actions → (service · lib)

// 지금 로그인한 사람 — 사이드바 아래 "내 이름 + 로그아웃" 자리에서 써요
// 로그인 안 했으면 null (지금은 getCurrentUser가 가짜 사용자를 돌려줘요)
export async function loadMe() {
  return getCurrentUser();
}
