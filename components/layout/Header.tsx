import Link from "next/link";

const nav = [
  { href: "/mes-projets", label: "Mes projets" },
  { href: "/expertise", label: "Expertise" },
  { href: "/methodo", label: "Méthodo" },
  { href: "/ecrits", label: "Écrits" },
  { href: "/play", label: "Play" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="border-b border-ink-800 bg-ink-900/50">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="focus-ring text-sm font-semibold">
          GoodProj
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="focus-ring text-ink-200 hover:text-ink-50">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
