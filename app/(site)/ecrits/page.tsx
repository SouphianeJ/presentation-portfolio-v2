import posts from "@/data/posts.json";
import Link from "next/link";

export default function EcritsPage() {
  return (
    <div className="container-narrow">
      <h1 className="mb-4 text-2xl font-semibold">Écrits</h1>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.title} className="rounded-2xl border border-ink-800 bg-ink-900/40 p-4">
            <div className="text-sm">{p.type === "curation" ? "Curation" : "Article"} — <Link href={p.url} className="text-mustard underline">{p.title}</Link></div>
            {p.summary && <p className="text-xs text-ink-300 mt-1">{p.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
