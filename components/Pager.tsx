import Link from "next/link";
import { getNeighbors } from "@/content/sections";

export default function Pager({ slug }: { slug: string }) {
  const { prev, next } = getNeighbors(slug);
  const left = prev
    ? { href: `/${prev.slug}`, top: "← Previous", label: prev.title }
    : { href: "/", top: "← Home", label: "Contents" };

  return (
    <nav className="pager">
      <Link href={left.href}>
        {left.top}
        <span className="label">{left.label}</span>
      </Link>
      {next ? (
        <Link href={`/${next.slug}`} style={{ textAlign: "right" }}>
          Next →
          <span className="label">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
