import { cn } from "@/lib/utils";

export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <article className={cn(className)}>{children}</article>;
}
