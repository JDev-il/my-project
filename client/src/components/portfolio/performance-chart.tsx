import { LineChart } from "lucide-react";

import { EmptyState } from "@/components/shared/empty-state";
import { SectionCard } from "@/components/shared/section-card";
import { Button } from "@/components/ui/button";

const RANGES = ["1D", "1W", "1M", "3M", "1Y", "ALL"] as const;

export function PerformanceChart({ className }: { className?: string }) {
  return (
    <SectionCard
      id="portfolio"
      className={className}
      title="Portfolio performance"
      description="Value over time compared with the market"
      action={
        // TODO(UI): LOGIC agent — supply range selection state, then wire the active range here
        <div role="group" aria-label="Time range" className="flex gap-1">
          {RANGES.map((range) => (
            <Button
              key={range}
              type="button"
              size="xs"
              variant={range === "1M" ? "secondary" : "ghost"}
              aria-pressed={range === "1M"}
            >
              {range}
            </Button>
          ))}
        </div>
      }
    >
      {/* TODO(UI): LOGIC agent — supply the performance series, then render the chart here */}
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed bg-muted/30">
        <EmptyState
          icon={LineChart}
          title="Performance chart"
          description="Your portfolio value over the selected range will appear here."
        />
      </div>
    </SectionCard>
  );
}
