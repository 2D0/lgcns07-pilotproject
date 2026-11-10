import Link from "next/link";
import { CodeXml } from "lucide-react";
import { routes } from "@/config/routes";

// 로그인 · 회원가입: 사이드바 없이 가운데 카드 하나
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-inset px-4 py-12">
      <Link href={routes.studies} className="mb-6 flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <CodeXml className="size-5" aria-hidden />
        </span>
        <span className="font-mono text-lg font-bold">soso.study</span>
      </Link>
      <div className="w-full max-w-sm rounded-md border border-border bg-card p-6">
        {children}
      </div>
    </main>
  );
}
