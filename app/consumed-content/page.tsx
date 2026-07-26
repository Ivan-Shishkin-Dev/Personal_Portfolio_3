import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ConsumedContent from "@/components/ConsumedContent";

export const metadata: Metadata = {
  title: "Consumed Content",
  description: "Everything I've read worth keeping — searchable, by source.",
};

export default function ConsumedContentPage() {
  return (
    <main className="page" data-screen-label="Consumed Content">
      <SiteHeader />
      <nav className="subnav">
        <Link className="home" href="/education#self-education">← Education</Link>
        <span className="sep">/</span>
        <span>Consumed Content</span>
      </nav>
      <header className="section-head section-head-tight">
        <div className="title-row">
          <span className="num mark">§</span>
          <h1>Consumed Content</h1>
        </div>
      </header>
      <article>
        <ConsumedContent />
      </article>
      <SiteFooter />
    </main>
  );
}
