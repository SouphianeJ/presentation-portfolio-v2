import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost";
type As = "button" | "a" | "link";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  as?: As;
  href?: string;
}

export default function Button({ variant = "primary", as = "button", href, className, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-pill px-4 py-2 text-sm focus-ring";
  const variants = {
    primary: "bg-mustard text-ink-950 hover:opacity-90",
    ghost: "bg-transparent border border-ink-700 text-ink-200 hover:bg-ink-900"
  } as const;

  const cls = cn(base, variants[variant], className);

  if (as === "a" && href) return <a className={cls} href={href} {...props} />;
  if (as === "link" && href) return <Link className={cls} href={href} {...(props as any)} />;
  return <button className={cls} {...props} />;
}
