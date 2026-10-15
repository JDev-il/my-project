import { SectionCard } from "@/components/shared/section-card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

import { FeedItem } from "./feed-item";

const PLACEHOLDER_ITEM_COUNT = 6;

export function LiveUpdatesFeed({ className }: { className?: string }) {
  return (
    <SectionCard
      id="live-feed"
      className={className}
      title="Live updates"
      description="Price moves, filings, and alerts for your stocks as they happen"
      action={
        // TODO(UI): LOGIC agent — supply stream connection status, then switch the dot to the gain tone and pulse while connected
        <Badge variant="outline">
          <span
            className="size-1.5 rounded-full bg-muted-foreground"
            aria-hidden="true"
          />
          Live
        </Badge>
      }
    >
      <ScrollArea className="h-96">
        <ul className="flex flex-col gap-5 pr-3">
          {/* TODO(UI): LOGIC agent — supply the update stream, then render one FeedItem per event */}
          {Array.from({ length: PLACEHOLDER_ITEM_COUNT }, (_, itemIndex) => (
            <FeedItem key={itemIndex} />
          ))}
        </ul>
      </ScrollArea>
    </SectionCard>
  );
}
