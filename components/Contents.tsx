import Link from "next/link";
import { sections } from "@/content/sections";

export default function Contents() {
  return (
    <section className="contents" aria-label="Site contents">
      <h2>Contents</h2>
      {sections.map((s) => (
        <Link key={s.slug} className="row" href={`/${s.slug}`}>
          <span className="num">{s.numeral}.</span>
          <span>
            <span>{s.title}</span>
            <span className="desc">{s.description}</span>
          </span>
          <span className="arrow">→</span>
        </Link>
      ))}
    </section>
  );
}
