import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/tokens.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas", display: "swap" });

export const metadata: Metadata = {
  title: "Portfolio — Ingénieur pédago & dev web",
  description: "Projets, expertise, méthodo (ADDIE × Scrum × Kirkpatrick).",
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest"
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${bebas.variable}`}>
      <body className="bg-ink-950 text-ink-50 font-sans">
        <Header />
        <main className="container-wide py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
