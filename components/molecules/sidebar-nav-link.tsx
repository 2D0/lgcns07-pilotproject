"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SidebarNavLinkProps = {
  href: string;
  icon: ReactNode;
  children: ReactNode;
};

// 지금 주소와 같으면 "선택됨" 모양(회색 배경 + 왼쪽 주황 막대)
export function SidebarNavLink({ href, icon, children }: SidebarNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground",
        isActive && "bg-sidebar-accent font-medium text-foreground",
      )}
    >
      {isActive && (
        <span
          aria-hidden
          className="absolute top-1.5 bottom-1.5 -left-2 w-1 rounded-full bg-marker"
        />
      )}
      {icon}
      {children}
    </Link>
  );
}
