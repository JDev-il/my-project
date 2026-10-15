import { ChangeIndicator } from "@/components/shared/change-indicator";
import { StatTile } from "@/components/shared/stat-tile";

const INDEX_LABELS = ["S&P 500", "NASDAQ", "Dow Jones", "Russell 2000"] as const;

export function MarketOverview() {
  return (
    <section
      id="overview"
      aria-label="Market overview"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {/* TODO(UI): LOGIC agent — supply live index quotes, then wire values and change direction here */}
      {INDEX_LABELS.map((label) => (
        <StatTile
          key={label}
          label={label}
          value="—"
          footer={<ChangeIndicator direction="flat">—</ChangeIndicator>}
        />
      ))}
    </section>
  );
}
