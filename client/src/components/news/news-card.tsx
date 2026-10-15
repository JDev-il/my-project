import { Skeleton } from "@/components/ui/skeleton";

export function NewsCard() {
  return (
    <article className="flex gap-4 py-4">
      <Skeleton className="hidden size-20 shrink-0 rounded-lg sm:block" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-12" />
        </div>
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <div className="flex gap-2 pt-1">
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      </div>
    </article>
  );
}
