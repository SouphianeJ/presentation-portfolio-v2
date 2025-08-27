import Card from "./Card";
import type { Skill } from "@/lib/types";

export default function SkillCard({ s }: { s: Skill }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <strong>{s.name}</strong>
        <span className="text-sm text-ink-300">Niveau {s.level}/5</span>
      </div>
      {s.proof && <p className="text-sm text-ink-200 mt-1">Preuves : {s.proof}</p>}
      {s.next && <p className="text-xs text-ink-400 mt-1">Prochain palier : {s.next}</p>}
    </Card>
  );
}
