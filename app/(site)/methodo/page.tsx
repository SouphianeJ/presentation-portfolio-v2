import Link from "next/link";

export default function MethodoPage() {
  return (
    <div className="container-narrow">
      <h1 className="mb-4 text-2xl font-semibold">Méthodo — ADDIE × Scrum × Kirkpatrick</h1>
      <p className="text-sm text-ink-200">
        J’itère court (Scrum), je conçois aligné (ADDIE) et je mesure (Kirkpatrick L1–L4).
      </p>
      <p className="mt-3">
        <Link className="text-mustard underline underline-offset-4" href="/goodprojform">
          Préparer une fiche projet →
        </Link>
      </p>
    </div>
  );
}
