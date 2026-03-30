import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ className, type = "button", ...props }: Props) {
  return <button type={type} className={cn(className)} {...props} />;
}

