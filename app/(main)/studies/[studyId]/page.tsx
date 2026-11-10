import { Suspense } from "react";
import { PageHeader } from "@/components/templates/page-header";
import { TodoBox } from "@/components/templates/todo-box";
import { Skeleton } from "@/components/ui/skeleton";

// 피그마 ② 스터디 상세 + 신청 — 담당: 이슈 #6 (신청 버튼은 #8)
// 강사님 방식: page는 동기 함수로 두고, params를 await 하는 부분은 Suspense 안 자식에서
export default function StudyDetailPage({
  params,
}: PageProps<"/studies/[studyId]">) {
  return (
    <section>
      <PageHeader title="스터디 상세" />
      <Suspense fallback={<Skeleton className="h-24 w-full" />}>
        <StudyDetail params={params} />
      </Suspense>
    </section>
  );
}

async function StudyDetail({
  params,
}: Pick<PageProps<"/studies/[studyId]">, "params">) {
  const { studyId } = await params;

  return (
    <TodoBox issue={6}>
      스터디 <span className="font-mono">#{studyId}</span>의 소개와 오른쪽 정보
      카드가 들어갈 자리예요.
    </TodoBox>
  );
}
