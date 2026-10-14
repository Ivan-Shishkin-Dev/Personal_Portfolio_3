import Link from "next/link";
import { sections } from "@/content/sections";

export default function SiteNav({
  currentSlug,
  home = false,
}: {
  currentSlug?: string;
  home?: boolean;
}) {
  return (
    <nav aria-label="Sections">
      <ul className="link-row site-nav">
        {!home && (
          <li>
            <Link href="/">Home</Link>
          </li>
        )}
        {sections.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/${s.slug}`}
              aria-current={s.slug === currentSlug ? "page" : undefined}
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
