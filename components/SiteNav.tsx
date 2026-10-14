import Link from "next/link";
import { sections } from "@/content/sections";

export default function SiteNav({ currentSlug }: { currentSlug?: string }) {
  return (
    <nav aria-label="Pages" className="site-nav">
      <ul className="subpages">
        {sections.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/${s.slug}`}
              aria-current={s.slug === currentSlug ? "page" : undefined}
            >
              <span className="subpage-icon" aria-hidden="true">{s.icon}</span>
              <span className="subpage-title">{s.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
