"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Badge from "./Badge";

export default function FilterChips({ tags }: { tags: string[] }) {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = sp.get("tag") || "all";

  const setTag = (tag: string) => {
    const params = new URLSearchParams(sp);
    if (tag === "all") params.delete("tag");
    else params.set("tag", tag);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {["all", ...tags].map((t) => (
        <button key={t} onClick={() => setTag(t)} className="focus-ring">
          <Badge
            label={t === "all" ? "Tous" : t}
            variant={t === "Tech" ? "tech" : t === "Pédagogie" ? "pedago" : "case"}
            className={active === t ? "opacity-100" : "opacity-60"}
          />
        </button>
      ))}
    </div>
  );
}
