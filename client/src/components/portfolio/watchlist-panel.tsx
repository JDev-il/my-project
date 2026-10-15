import { Plus } from "lucide-react";

import { SectionCard } from "@/components/shared/section-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const PLACEHOLDER_ROW_COUNT = 6;

export function WatchlistPanel({ className }: { className?: string }) {
  return (
    <SectionCard
      id="watchlist"
      className={className}
      title="Watchlist"
      description="Stocks you are following"
      action={
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Add to watchlist"
        >
          <Plus aria-hidden="true" />
        </Button>
      }
    >
      <ul className="flex flex-col">
        {/* TODO(UI): LOGIC agent — supply watchlist quotes from the store, then render one row per symbol */}
        {Array.from({ length: PLACEHOLDER_ROW_COUNT }, (_, rowIndex) => (
          <li key={rowIndex}>
            {rowIndex > 0 ? <Separator /> : null}
            <div className="flex items-center justify-between gap-4 py-3">
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-3 w-24" />
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-3 w-10" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
