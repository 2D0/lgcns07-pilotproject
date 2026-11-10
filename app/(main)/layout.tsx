import { Sidebar } from "@/components/organisms/sidebar";

// 왼쪽 사이드바 + 오른쪽 본문 (목록 · 상세 · 등록 · 내 모집글 · 신청자 관리)
export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-8 py-8">
        {children}
      </main>
    </div>
  );
}
