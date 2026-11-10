import Link from "next/link";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/templates/page-header";
import { TodoBox } from "@/components/templates/todo-box";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";

// 피그마 ① 스터디 둘러보기 — 담당: 이슈 #5 (검색 · 칩 · 쪽 번호는 #9)
export default function StudiesPage() {
  return (
    <section>
      <PageHeader
        title="스터디 둘러보기"
        description="함께 성장할 개발자 스터디를 찾아보세요."
        action={
          <Link href={routes.studyWrite} className={buttonVariants()}>
            <Plus aria-hidden />
            모집글 등록
          </Link>
        }
      />
      <TodoBox issue={5}>
        스터디 목록 표가 들어갈 자리예요. 가짜 데이터는{" "}
        <code className="font-mono">lib/mock-studies.ts</code>에 있어요.
      </TodoBox>
    </section>
  );
}
