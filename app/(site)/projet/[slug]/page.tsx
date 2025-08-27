import { notFound } from "next/navigation";
import projects from "@/data/projects.json";

export default function ProjetPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container-narrow">
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      {project.metric && <p className="text-mint mt-1">{project.metric}</p>}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Contexte (P)</h2>
        <p className="text-sm text-ink-200">Résumé du problème et baseline (à détailler step 3).</p>
        <h2 className="text-xl font-semibold">Actions (A)</h2>
        <ul className="list-disc pl-6 text-sm text-ink-200">
          <li>Approche et choix clés (tech + pédago).</li>
          <li>Itérations, accessibilité, traçabilité.</li>
        </ul>
        <h2 className="text-xl font-semibold">Résultats (R)</h2>
        <p className="text-sm text-ink-200">{project.summary}</p>
      </section>
    </div>
  );
}
