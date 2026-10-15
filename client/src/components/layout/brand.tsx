import { LineChart } from "lucide-react";

export function Brand() {
  return (
    <div className="flex items-center gap-2 px-3">
      <span className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <LineChart className="size-4" aria-hidden="true" />
      </span>
      <span className="text-base font-semibold tracking-tight">my-project</span>
    </div>
  );
}
