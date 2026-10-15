import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

type StatTileProps = {
  label: string;
  value: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function StatTile({ label, value, footer, className }: StatTileProps) {
  return (
    <Card size="sm" className={className}>
      <CardContent className="flex flex-col gap-1">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="text-2xl font-semibold tracking-tight tabular-nums">
          {value}
        </p>
        {footer ? <div className="min-h-4">{footer}</div> : null}
      </CardContent>
    </Card>
  );
}
