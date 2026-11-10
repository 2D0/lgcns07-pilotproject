import { Suspense } from "react";
import { PageHeader } from "@/components/templates/page-header";
import { TodoBox } from "@/components/templates/todo-box";
import { Skeleton } from "@/components/ui/skeleton";

// 피그마 ③ 모집글 등록 · 수정 — 담당: 이슈 #7
// 등록 = /studies/write, 수정 = /studies/write?studyId=3 (차이는 id 하나)
export default function StudyWritePage({
  searchParams,
}: PageProps<"/studies/write">) {
  return (
    <section>
      <Suspense fallback={<Skeleton className="h-24 w-full" />}>
        <StudyWrite searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

async function StudyWrite({
  searchParams,
}: Pick<PageProps<"/studies/write">, "searchParams">) {
  const { studyId } = await searchParams;
  const isEdit = typeof studyId === "string";

  return (
    <>
      <PageHeader title={isEdit ? "모집글 수정" : "모집글 등록"} />
      <TodoBox issue={7}>모집글 입력 폼이 들어갈 자리예요.</TodoBox>
    </>
  );
}
