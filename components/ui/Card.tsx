import { cn } from "@/lib/utils";

export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <article className={cn("rounded-2xl border border-ink-800 bg-ink-900/40 p-5", className)}>{children}</article>;
}
