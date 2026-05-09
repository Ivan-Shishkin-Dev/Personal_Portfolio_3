import Link from "next/link";
import { getNeighbors } from "@/content/sections";

export default function Pager({ slug }: { slug: string }) {
  const { prev, next } = getNeighbors(slug);

  const left = prev
    ? { href: `/${prev.slug}`, top: "← Previous", num: prev.numeral, label: prev.title }
    : { href: "/", top: "← Home", num: null, label: "Contents" };

  return (
    <nav className="pager">
      <Link href={left.href}>
        {left.top}
        <span className="label">
          {left.num && <span className="num">{left.num}.</span>}
          {left.label}
        </span>
      </Link>
      <span className="bullet" aria-hidden="true" />
      {next ? (
        <Link href={`/${next.slug}`}>
          Next →
          <span className="label">
            <span className="num">{next.numeral}.</span>
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
