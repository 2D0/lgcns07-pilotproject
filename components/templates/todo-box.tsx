import type { ReactNode } from "react";

type TodoBoxProps = {
  issue: number;
  children: ReactNode;
};

// 🚧 아직 안 만든 화면 자리 표시. 담당자가 화면을 만들면 지워요.
export function TodoBox({ issue, children }: TodoBoxProps) {
  return (
    <div className="rounded-md border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
      <p className="font-mono text-xs text-subtle">🚧 이슈 #{issue}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
