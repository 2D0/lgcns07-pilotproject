import Link from "next/link";
import { TodoBox } from "@/components/templates/todo-box";
import { routes } from "@/config/routes";

// 피그마 ⑥ 회원가입 — 담당: 이슈 #3
export default function SignupPage() {
  return (
    <section>
      <h1 className="mb-4 text-xl font-bold">회원가입</h1>
      <TodoBox issue={3}>
        아이디 · 닉네임 · 비밀번호 입력 폼이 들어갈 자리예요.
      </TodoBox>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        이미 계정이 있나요?{" "}
        <Link href={routes.login} className="text-link hover:underline">
          로그인
        </Link>
      </p>
    </section>
  );
}
