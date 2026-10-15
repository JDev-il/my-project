import { SectionCard } from "@/components/shared/section-card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const COLUMNS = [
  { label: "Symbol", numeric: false },
  { label: "Shares", numeric: true },
  { label: "Avg. cost", numeric: true },
  { label: "Price", numeric: true },
  { label: "Market value", numeric: true },
  { label: "Day", numeric: true },
  { label: "Total return", numeric: true },
] as const;

const PLACEHOLDER_ROW_COUNT = 5;

export function HoldingsTable({ className }: { className?: string }) {
  return (
    <SectionCard
      className={className}
      title="Holdings"
      description="Positions you currently own"
    >
      <Table>
        <TableHeader>
          <TableRow>
            {COLUMNS.map(({ label, numeric }) => (
              <TableHead key={label} className={numeric ? "text-right" : undefined}>
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* TODO(UI): LOGIC agent — supply holdings from the store, then render one row per position */}
          {Array.from({ length: PLACEHOLDER_ROW_COUNT }, (_, rowIndex) => (
            <TableRow key={rowIndex}>
              {COLUMNS.map(({ label, numeric }) => (
                <TableCell key={label}>
                  <Skeleton
                    className={numeric ? "ml-auto h-4 w-16" : "h-4 w-14"}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionCard>
  );
}
