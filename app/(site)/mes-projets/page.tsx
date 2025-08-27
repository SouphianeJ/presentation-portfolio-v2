import projects from "@/data/projects.json";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function MesProjetsPage() {
  return (
    <div className="container-narrow">
      <h1 className="mb-4 text-2xl font-semibold">Mes projets</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug}>
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-sm text-ink-200">{p.summary}</p>
            <div className="mt-3">
              <Link className="text-mustard underline underline-offset-4" href={`/projet/${p.slug}`}>Étude de cas →</Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
