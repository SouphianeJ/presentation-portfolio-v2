import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import Card from "@/components/ui/Card";

export default function ProjetPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container-narrow space-y-6">
      <header>
        <h1 className="title text-3xl">{project.title}</h1>
        {project.metric && <p className="text-mint mt-1">{project.metric}</p>}
      </header>

      <Card className="card">
        <h2 className="text-xl font-semibold">Problème (P)</h2>
        <p className="text-sm text-ink-200 mt-1">Contexte, baseline, contraintes (à détailler).</p>
      </Card>

      <Card className="card">
        <h2 className="text-xl font-semibold">Actions (A)</h2>
        <ul className="list-disc pl-6 text-sm text-ink-200 mt-1">
          <li>Design pédagogique (ADDIE), itérations courtes (Scrum), accessibilité (AA).</li>
          <li>Implémentation technique (ex : Next.js, xAPI/LRS, Storyline).</li>
        </ul>
      </Card>

      <Card className="card">
        <h2 className="text-xl font-semibold">Résultats (R)</h2>
        <p className="text-sm text-ink-200 mt-1">{project.summary}</p>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <div><strong>Avant</strong><p className="text-sm text-ink-300">…</p></div>
          <div><strong>Après</strong><p className="text-sm text-ink-300">…</p></div>
        </div>
      </Card>

      <Card className="card">
        <h2 className="text-xl font-semibold">Preuves & liens</h2>
        <ul className="list-disc pl-6 text-sm mt-2">
          <li><a className="underline" href="#">Démo</a></li>
          <li><a className="underline" href="#">Code</a></li>
          <li><a className="underline" href="#">SCORM / xAPI</a></li>
          <li><a className="underline" href="#">Storyboard</a></li>
        </ul>
      </Card>
    </div>
  );
}
