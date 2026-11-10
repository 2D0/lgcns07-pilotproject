import Link from "next/link";
import { TodoBox } from "@/components/templates/todo-box";
import { routes } from "@/config/routes";

// 피그마 ⑤ 로그인 — 담당: 이슈 #4
export default function LoginPage() {
  return (
    <section>
      <h1 className="mb-4 text-xl font-bold">로그인</h1>
      <TodoBox issue={4}>아이디 · 비밀번호 입력 폼이 들어갈 자리예요.</TodoBox>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        처음이신가요?{" "}
        <Link href={routes.signup} className="text-link hover:underline">
          회원가입
        </Link>
      </p>
    </section>
  );
}
