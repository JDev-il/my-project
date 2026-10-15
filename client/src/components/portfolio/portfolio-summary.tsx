import { ChangeIndicator } from "@/components/shared/change-indicator";
import { StatTile } from "@/components/shared/stat-tile";

export function PortfolioSummary() {
  return (
    <section
      aria-label="Portfolio summary"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {/* TODO(UI): LOGIC agent — supply portfolio totals from the store, then wire values here */}
      <StatTile
        label="Portfolio value"
        value="—"
        footer={<ChangeIndicator direction="flat">—</ChangeIndicator>}
      />
      <StatTile
        label="Today's change"
        value="—"
        footer={<ChangeIndicator direction="flat">—</ChangeIndicator>}
      />
      <StatTile
        label="Total return"
        value="—"
        footer={<ChangeIndicator direction="flat">—</ChangeIndicator>}
      />
      <StatTile label="Cash available" value="—" />
    </section>
  );
}
