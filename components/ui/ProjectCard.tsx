"use client";
import Card from "./Card";
import Icon from "./Icon";
import Link from "next/link";
import Badge from "./Badge";
import type { Project } from "@/lib/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        {p.metric && <span className="text-xs text-mint">{p.metric}</span>}
      </div>
      <p className="mt-2 text-sm text-ink-200">{p.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <TooltipProvider>
          {p.tags?.map((t) => (
            <Tooltip key={t}>
              <TooltipTrigger asChild>
                <span>
                  <Badge label={t} variant={t === "Tech" ? "tech" : t === "Pédagogie" ? "pedago" : "case"} />
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-ink-900 text-ink-50 border border-ink-700">
                <p className="text-xs">{t === "Tech" ? "Stack/front/xAPI" : t === "Pédagogie" ? "ADDIE, Storyline, LxD" : "Autre tag"}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Link className="text-mustard underline underline-offset-4" href={`/projet/${p.slug}`}>
          Étude de cas
        </Link>
        <Icon name="arrow-right" className="h-4 w-4" />
      </div>
    </Card>
  );
}
