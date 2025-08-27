"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Button from "@/components/ui/Button";

const nav = [
  { href: "/mes-projets", label: "Mes projets" },
  { href: "/expertise", label: "Expertise" },
  { href: "/methodo", label: "Méthodo" },
  { href: "/ecrits", label: "Écrits" },
  { href: "/play", label: "Play" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
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
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="focus-ring text-ink-200 hover:text-ink-50">Contact rapide</button>
            </DialogTrigger>
            <DialogContent className="bg-ink-900 text-ink-50 border border-ink-700">
              <DialogHeader>
                <DialogTitle>Contact rapide</DialogTitle>
              </DialogHeader>
              <div className="mt-2 text-sm">
                <p>
                  Écris-moi : <a className="underline" href="mailto:you@example.com">you@example.com</a>
                </p>
                <p className="mt-2">
                  Ou passe par la page <a className="underline" href="/contact" onClick={() => setOpen(false)}>Contact</a>.
                </p>
              </div>
              <div className="mt-4">
                <Button onClick={() => setOpen(false)}>Fermer</Button>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  );
}
