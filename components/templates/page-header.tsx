import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode; // 오른쪽 버튼 자리 (예: "+ 모집글 등록")
};

// 모든 화면 맨 위 제목 줄 (피그마 ① "스터디 둘러보기" 제목 모양)
export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <header className="mb-6 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </header>
  );
}
