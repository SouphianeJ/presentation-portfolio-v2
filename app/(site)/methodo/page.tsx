import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

export default function MethodoPage() {
  return (
    <div className="container-narrow space-y-4">
      <h1 className="title text-3xl">Méthodo — ADDIE × Scrum × Kirkpatrick</h1>

      <div className="card grid gap-3 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">ADDIE</h3>
          <p className="text-sm text-ink-200">Analyse → Design → Dev → Implémentation → Évaluation.</p>
        </div>
        <div>
          <h3 className="font-semibold">Scrum</h3>
          <p className="text-sm text-ink-200">Sprints 1–2 sem., DoR/DoD, démos, rétro.</p>
        </div>
        <div>
          <h3 className="font-semibold">Kirkpatrick</h3>
          <TooltipProvider>
            <div className="flex gap-2 text-sm">
              {["L1", "L2", "L3", "L4"].map((l) => (
                <Tooltip key={l}>
                  <TooltipTrigger asChild><span className="underline cursor-help">{l}</span></TooltipTrigger>
                  <TooltipContent className="bg-ink-900 text-ink-50 border border-ink-700">
                    {l === "L1" && "Réaction (CSAT)."}
                    {l === "L2" && "Apprentissage (post-test)."}
                    {l === "L3" && "Transfert au poste (J+30)."}
                    {l === "L4" && "Impact business (KPI)."}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>

      <p>
        Préparer une fiche projet : <Link className="underline text-mustard" href="/goodprojform">/goodprojform</Link>
      </p>
    </div>
  );
}
