import { SectionCard } from "@/components/shared/section-card";

import { RecommendationCard } from "./recommendation-card";

const PLACEHOLDER_CARD_COUNT = 3;

export function RecommendationsPanel({ className }: { className?: string }) {
  return (
    <SectionCard
      id="recommendations"
      className={className}
      title="AI recommendations"
      description="Ideas reasoned from your holdings, watchlist, and the latest news"
    >
      <div className="flex flex-col gap-3">
        {/* TODO(UI): LOGIC agent — supply AI recommendations, then render one RecommendationCard per idea */}
        {Array.from({ length: PLACEHOLDER_CARD_COUNT }, (_, cardIndex) => (
          <RecommendationCard key={cardIndex} />
        ))}
        <p className="text-xs text-muted-foreground">
          AI-generated insights are for information only and are not financial
          advice.
        </p>
      </div>
    </SectionCard>
  );
}
