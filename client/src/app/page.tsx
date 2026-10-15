import { AssistantPanel } from "@/components/assistant/assistant-panel";
import { MarketOverview } from "@/components/dashboard/market-overview";
import { LiveUpdatesFeed } from "@/components/feed/live-updates-feed";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { NewsPanel } from "@/components/news/news-panel";
import { HoldingsTable } from "@/components/portfolio/holdings-table";
import { PerformanceChart } from "@/components/portfolio/performance-chart";
import { PortfolioSummary } from "@/components/portfolio/portfolio-summary";
import { WatchlistPanel } from "@/components/portfolio/watchlist-panel";
import { RecommendationsPanel } from "@/components/recommendations/recommendations-panel";

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        title="Dashboard"
        description="Follow your investments, get AI-assisted reasoning, and stay on top of the market."
      />

      <MarketOverview />
      <PortfolioSummary />

      <div className="grid gap-6 xl:grid-cols-3">
        <PerformanceChart className="xl:col-span-2" />
        <RecommendationsPanel />
        <HoldingsTable className="xl:col-span-2" />
        <WatchlistPanel />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AssistantPanel />
        <LiveUpdatesFeed />
      </div>

      <NewsPanel />
    </AppShell>
  );
}
