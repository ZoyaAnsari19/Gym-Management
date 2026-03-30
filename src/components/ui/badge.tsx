import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type Props = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export default function Badge({ className, ...props }: Props) {
  return <span className={cn(className)} {...props} />;
}

