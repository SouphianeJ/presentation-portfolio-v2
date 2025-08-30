import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

type As = "button" | "a" | "link";

interface ButtonProps extends ComponentProps<"button"> {
  as?: As;
  href?: string;
}

export default function Button({ as = "button", href, className, ...props }: ButtonProps) {
  const cls = cn(className);
  if (as === "a" && href) return <a className={cls} href={href} {...(props as ComponentProps<"a">)} />;
  if (as === "link" && href) return <Link className={cls} href={href} {...(props as any)} />;
  return <button className={cls} {...props} />;
}
