import { PageHeader } from "@/components/templates/page-header";
import { TodoBox } from "@/components/templates/todo-box";

// 내 모집글 — 담당: 이슈 #13
export default function MyStudiesPage() {
  return (
    <section>
      <PageHeader
        title="내 모집글"
        description="내가 만든 스터디를 모아 봐요."
      />
      <TodoBox issue={13}>내가 만든 스터디 목록이 들어갈 자리예요.</TodoBox>
    </section>
  );
}
