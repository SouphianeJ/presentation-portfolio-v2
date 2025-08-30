import Card from "./Card";
import type { Skill } from "@/lib/types";

export default function SkillCard({ s }: { s: Skill }) {
  return (
    <Card className="card">
      <div className="flex items-center justify-between">
        <strong>{s.name}</strong>
        <span className="text-xs text-ink-300">Niveau {s.level}/5</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-pill bg-ink-800">
        <div
          className="h-2 rounded-pill bg-mustard"
          style={{ width: `${(Math.max(1, Math.min(5, s.level)) / 5) * 100}%` }}
        />
      </div>
      {s.proof && <p className="text-sm text-ink-200 mt-2">Preuves : {s.proof}</p>}
      {s.next && <p className="text-xs text-ink-400 mt-1">Prochain palier : {s.next}</p>}
    </Card>
  );
}
