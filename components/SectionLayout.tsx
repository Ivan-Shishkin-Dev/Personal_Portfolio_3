import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Pager from "./Pager";
import { getSection } from "@/content/sections";

export default function SectionLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const s = getSection(slug);
  return (
    <main className="page" data-screen-label={`${s.numeral} ${s.title}`}>
      <SiteHeader nameAsLink />
      <nav className="subnav">
        <Link className="home" href="/">← Home</Link>
        <span className="sep">/</span>
        <span>{s.numeral}. {s.title}</span>
      </nav>
      <header className="section-head">
        <span className="num">{s.numeral}.</span>
        <div>
          <div className="eyebrow">{s.eyebrow}</div>
          <h1>{s.title}</h1>
        </div>
      </header>
      <article>{children}</article>
      <Pager slug={slug} />
      <SiteFooter />
    </main>
  );
}
