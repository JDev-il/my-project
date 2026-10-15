import type { ReactNode } from "react";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

const directionStyles = {
  up: { Icon: TrendingUp, className: "text-gain" },
  down: { Icon: TrendingDown, className: "text-loss" },
  flat: { Icon: Minus, className: "text-muted-foreground" },
} as const;

type ChangeIndicatorProps = {
  direction?: keyof typeof directionStyles;
  children: ReactNode;
  className?: string;
};

export function ChangeIndicator({
  direction = "flat",
  children,
  className,
}: ChangeIndicatorProps) {
  const { Icon, className: toneClassName } = directionStyles[direction];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium tabular-nums",
        toneClassName,
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {children}
    </span>
  );
}
