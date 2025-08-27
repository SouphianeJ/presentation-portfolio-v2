import skills from "@/data/skills.json";

export default function ExpertisePage() {
  return (
    <div className="container-narrow">
      <h1 className="mb-4 text-2xl font-semibold">Expertise</h1>
      <ul className="space-y-3">
        {skills.map((s) => (
          <li key={s.name} className="rounded-2xl border border-ink-800 bg-ink-900/40 p-4">
            <div className="flex items-center justify-between">
              <strong>{s.name}</strong>
              <span className="text-sm text-ink-300">Niveau {s.level}/5</span>
            </div>
            {s.proof && <p className="text-sm text-ink-200 mt-1">Preuves : {s.proof}</p>}
            {s.next && <p className="text-xs text-ink-400 mt-1">Prochain palier : {s.next}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
