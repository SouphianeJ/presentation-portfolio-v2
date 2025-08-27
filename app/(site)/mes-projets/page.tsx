"use client";
import { Suspense } from "react";
import projects from "@/data/projects.json";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ProjectCard from "@/components/ui/ProjectCard";
import FilterChips from "@/components/ui/FilterChips";
import { useSearchParams } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Button from "@/components/ui/Button";

export default function MesProjetsPage() {
  return (
    <Suspense fallback={null}>
      <MesProjetsContent />
    </Suspense>
  );
}

function MesProjetsContent() {
  const sp = useSearchParams();
  const tag = sp.get("tag");
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filtered = tag ? projects.filter((p) => p.tags.includes(tag)) : projects;

  return (
    <div className="container-narrow">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Mes projets</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">Filtres</Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-ink-900 text-ink-50 border-ink-700">
            <SheetHeader><SheetTitle>Filtres</SheetTitle></SheetHeader>
            <div className="mt-4">
              <FilterChips tags={tags} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="mb-4 hidden md:block">
        <FilterChips tags={tags} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (<ProjectCard key={p.slug} p={p} />))}
      </div>

      <div className="mt-6">
        <Card>
          <p className="text-sm">
            Tu veux voir le formulaire projet ? <Link className="text-mustard underline" href="/methodo">Méthodo →</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
