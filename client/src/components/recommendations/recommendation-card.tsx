import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function RecommendationCard() {
  return (
    <article className="flex flex-col gap-3 rounded-lg border p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-14" />
          <Badge variant="outline">Action</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Confidence</span>
          <Skeleton className="h-3 w-10" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div>
        <Button type="button" variant="ghost" size="sm">
          View reasoning
        </Button>
      </div>
    </article>
  );
}
