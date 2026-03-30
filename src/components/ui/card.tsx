import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function Card({ className, ...props }: Props) {
  return <div className={cn(className)} {...props} />;
}

