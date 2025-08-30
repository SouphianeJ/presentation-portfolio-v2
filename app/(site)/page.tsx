import Link from "next/link";
import PatternBG from "@/components/ui/PatternBG";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import projects from "@/data/projects.json";

export default function HomePage() {
  const spotlight = projects.slice(0, 3);
  return (
    <div className="space-y-12">
      {/* HERO */}
      <PatternBG className="rounded-2xl p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr,220px] items-center">
          <div>
            <h1 className="title text-4xl md:text-5xl">Ingénieur pédagogique & dev web</h1>
            <p className="mt-2 text-ink-200">
              J’aligne design, code et métriques pour des apprentissages utiles. Ex : -30 à -40 % time-to-competency (3 cohortes), suivi xAPI.
            </p>
            <div className="mt-5 flex gap-3">
              <Button as="link" href="/mes-projets" className="btn btn-primary">Voir 3 projets vedettes</Button>
              <Button as="link" href="/contact" className="btn btn-ghost">Me contacter</Button>
            </div>
          </div>
          {/* Avatar — tu déposeras l’image SVG */}
          <div className="justify-self-end hidden md:block">
            <img src="/avatars/avatar_male_pointing.svg" alt="" width={200} height={200} />
          </div>
        </div>
      </PatternBG>

      {/* PROJETS VEDETTES */}
      <Section title="Projets vedettes" subtitle="PAR compact, accès direct aux études de cas.">
        <div className="grid gap-4 md:grid-cols-3">
          {spotlight.map((p) => (
            <Card key={p.slug} className="card">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.metric && <span className="text-xs text-mint">{p.metric}</span>}
              </div>
              <p className="mt-2 text-sm text-ink-200">{p.summary}</p>
              <div className="mt-4 flex items-center gap-2">
                <Link className="text-mustard underline underline-offset-4" href={`/projet/${p.slug}`}>Étude de cas</Link>
                <Icon name="arrow-right" className="h-4 w-4" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROOF BAR */}
      <div className="card">
        <p className="text-sm">
          <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-beige text-ink-900">★</span>
          « Clair, mesurable, efficace » — CSAT 4,6/5 — -40 % time-to-competency (n=86)
        </p>
      </div>

      {/* DEUX PORTES */}
      <Section title="Choisir sa porte">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="card">
            <div className="flex items-center gap-2">
              <Icon name="projects" className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Mes projets</h3>
            </div>
            <p className="text-sm text-ink-200 mt-1">Onboarding, xAPI, Storyline, Next.js…</p>
            <div className="mt-3"><Link className="btn btn-primary" href="/mes-projets">Explorer</Link></div>
          </Card>
          <Card className="card">
            <div className="flex items-center gap-2">
              <Icon name="expertise" className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Expertise</h3>
            </div>
            <p className="text-sm text-ink-200 mt-1">Compétences rédigées : niveau → preuves → prochain palier.</p>
            <div className="mt-3"><Link className="btn btn-primary" href="/expertise">Voir mes compétences</Link></div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
