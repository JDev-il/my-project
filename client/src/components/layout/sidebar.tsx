import { Brand } from "./brand";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col gap-6 border-r border-sidebar-border bg-sidebar px-3 py-5 text-sidebar-foreground lg:flex">
      <Brand />
      <SidebarNav />
    </aside>
  );
}
