// 🔌 로그아웃 연결 지점 — auth 담당이 이 함수 안쪽만 바꾸면 돼요.
//    화면(LogoutButton)은 이 함수만 불러요.
//
// 🧪 지금: 잠깐 기다리기만 해요 (가짜)
// ✅ 나중 (NextAuth v4):
//    import { signOut } from "next-auth/react";
//    await signOut({ redirect: false }); // 우리 사이트 로그인 쿠키 지우기
//    + authOptions의 events.signOut(서버)에서 강사님 POST /auth/logout 부르기
//      → 서버에서도 토큰을 무효로 만들어요 (쿠키만 지우면 훔친 토큰은 계속 쓸 수 있어요)

export async function requestLogout(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 400)); // 🧪 서버 다녀오는 시간 흉내
}
