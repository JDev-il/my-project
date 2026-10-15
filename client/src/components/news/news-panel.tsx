import { SectionCard } from "@/components/shared/section-card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { NewsCard } from "./news-card";

const NEWS_FILTERS = [
  { value: "all", label: "All" },
  { value: "holdings", label: "My holdings" },
  { value: "watchlist", label: "Watchlist" },
  { value: "trending", label: "Worth a look" },
] as const;

const PLACEHOLDER_ARTICLE_COUNT = 4;

export function NewsPanel({ className }: { className?: string }) {
  return (
    <SectionCard
      id="news"
      className={className}
      title="Market news"
      description="Ongoing coverage of the stocks and shares you follow, plus ideas worth investigating"
    >
      <Tabs defaultValue="all">
        <TabsList variant="line">
          {NEWS_FILTERS.map(({ value, label }) => (
            <TabsTrigger key={value} value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {NEWS_FILTERS.map(({ value }) => (
          <TabsContent key={value} value={value}>
            {/* TODO(UI): LOGIC agent — supply filtered news from the store, then render one NewsCard per article */}
            <div className="flex flex-col">
              {Array.from({ length: PLACEHOLDER_ARTICLE_COUNT }, (_, articleIndex) => (
                <div key={articleIndex}>
                  {articleIndex > 0 ? <Separator /> : null}
                  <NewsCard />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionCard>
  );
}
