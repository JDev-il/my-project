import type { ComponentProps, ReactNode } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SectionCardProps = Omit<ComponentProps<typeof Card>, "title"> & {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  contentClassName?: string;
};

export function SectionCard({
  title,
  description,
  action,
  contentClassName,
  className,
  children,
  ...props
}: SectionCardProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
        {action ? <CardAction>{action}</CardAction> : null}
      </CardHeader>
      <CardContent className={cn("min-w-0", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}
