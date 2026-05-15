import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Pager from "./Pager";
import { getSection } from "@/content/sections";

export default function SectionLayout({
  slug,
  preface,
  children,
}: {
  slug: string;
  preface?: React.ReactNode;
  children: React.ReactNode;
}) {
  const s = getSection(slug);
  return (
    <main className="page" data-screen-label={`${s.numeral} ${s.title}`}>
      <SiteHeader currentSlug={slug} />
      <nav className="subnav">
        <Link className="home" href="/">← Home</Link>
        <span className="sep">/</span>
        <span>{s.numeral}. {s.title}</span>
      </nav>
      <header className="section-head">
        <div className="eyebrow">{s.eyebrow}</div>
        <div className="title-row">
          <span className="num">{s.numeral}.</span>
          <h1>{s.title}</h1>
        </div>
        {preface ? <div className="section-preface">{preface}</div> : null}
      </header>
      <article>{children}</article>
      <Pager slug={slug} />
      <SiteFooter />
    </main>
  );
}
