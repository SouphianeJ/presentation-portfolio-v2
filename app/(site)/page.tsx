import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import projects from "@/data/projects.json";

export default function HomePage() {
  const spotlight = projects.slice(0, 3);
  return (
    <div className="container-narrow space-y-10">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="mt-6">
        <h1 id="hero-title" className="text-3xl font-semibold">
          Ingénieur Péda X Tech — De l'analyse du besoin au déploiement.
        </h1>
        <p className="mt-2 text-ink-200">Ex : -30 à -40% time-to-competency sur 3 cohortes, suivi xAPI.</p>
        <div className="mt-4 flex gap-3">
          <Button as="link" href="/mes-projets">Voir 3 projets vedettes</Button>
          <Button variant="ghost" as="link" href="/contact">Me contacter</Button>
        </div>
      </section>

      {/* Spotlight projets */}
      <Section title="Projets vedettes" subtitle="PAR compact, accès direct aux études de cas.">
        <div className="grid gap-4 md:grid-cols-3">
          {spotlight.map((p) => (
            <Card key={p.slug}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              {p.metric && <p className="text-sm text-mint">{p.metric}</p>}
              <p className="mt-2 text-sm text-ink-200">{p.summary}</p>
              <div className="mt-3">
                <Link className="text-sm text-mustard underline underline-offset-4" href={`/projet/${p.slug}`}>
                  Étude de cas →
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-4">
          <Button as="link" href="/mes-projets" variant="ghost">Tout voir</Button>
        </div>
      </Section>

      {/* Proof bar */}
      <Section title="Preuves rapides">
        <Card>
          <p className="text-sm">
            « Clair, mesurable, efficace » — CSAT 4,6/5 — -40 % time-to-competency (n=86)
          </p>
        </Card>
      </Section>

      {/* Deux portes */}
      <Section title="Choisir sa porte">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Mes projets</h3>
            <p className="text-sm text-ink-200">Onboarding, xAPI, Storyline, Next.js…</p>
            <div className="mt-3"><Button as="link" href="/mes-projets">Explorer</Button></div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Expertise</h3>
            <p className="text-sm text-ink-200">Compétences rédigées : niveau → preuves → prochain palier.</p>
            <div className="mt-3"><Button as="link" href="/expertise">Voir mes compétences</Button></div>
          </Card>
        </div>
      </Section>

      {/* Écrits */}
      <Section title="Écrits récents">
        <ul className="list-disc pl-6 text-sm">
          <li><Link href="/ecrits">Mesurer un parcours avec xAPI</Link></li>
          <li><Link href="/ecrits">Pourquoi ce guide Next.js m’a aidé</Link></li>
        </ul>
      </Section>

      {/* Play */}
      <Section title="Play">
        <Card>
          <p className="text-sm text-ink-200">Serious games maison. Chargement uniquement sur la page dédiée.</p>
          <div className="mt-3"><Button as="link" href="/play">Jouer</Button></div>
        </Card>
      </Section>
    </div>
  );
}
