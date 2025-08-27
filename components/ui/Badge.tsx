import { cn } from "@/lib/utils";
type Variant = "tech" | "pedago" | "case";

export default function Badge({ label, variant = "case", className }: { label: string; variant?: Variant; className?: string }) {
  const map = {
    tech: "bg-mustard text-ink-950",
    pedago: "bg-mint text-ink-950",
    case: "bg-beige text-ink-900"
  } as const;
  return (
    <span className={cn("inline-flex items-center rounded-pill border border-ink-700 px-3 py-1 text-xs font-semibold", map[variant], className)}>
      {label}
    </span>
  );
}
