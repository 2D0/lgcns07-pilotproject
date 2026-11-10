import { PageHeader } from "@/components/templates/page-header";
import { TodoBox } from "@/components/templates/todo-box";

// 피그마 ④ 신청자 관리 — 담당: 이슈 #10
// 스터디 고르기는 주소로: /applicants?studyId=3
export default function ApplicantsPage() {
  return (
    <section>
      <PageHeader
        title="신청자 관리"
        description="내 스터디에 들어온 신청을 승인하거나 거절해요."
      />
      <TodoBox issue={10}>신청자 표가 들어갈 자리예요.</TodoBox>
    </section>
  );
}
