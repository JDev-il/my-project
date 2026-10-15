import { cn } from "@/lib/utils";

import { NAV_ITEMS } from "./nav-items";

type SidebarNavProps = {
  className?: string;
};

export function SidebarNav({ className }: SidebarNavProps) {
  return (
    <nav aria-label="Primary" className={cn("flex flex-col gap-1", className)}>
      {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-3 focus-visible:ring-sidebar-ring/50"
        >
          <Icon className="size-4" aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  );
}
