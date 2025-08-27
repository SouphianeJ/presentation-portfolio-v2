import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/tokens.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "—Souphiane Jender - Portfolio",
  description: "Ingénieur pédagogique & dev web — projets, expertise, méthodo."
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-ink-950 text-ink-50">
        <Header />
        <main className="container-wide py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
