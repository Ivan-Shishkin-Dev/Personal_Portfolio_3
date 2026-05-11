import Link from "next/link";
import { Fragment } from "react";
import { sections } from "@/content/sections";

export default function SiteHeader({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  return (
    <header className="site-head">
      <Link className="name" href="/">Ivan Shishkin</Link>
      <nav className="site-nav">
        {sections.map((s, i) => {
          const isCurrent = s.slug === currentSlug;
          return (
            <Fragment key={s.slug}>
              {i > 0 && <span className="sep" aria-hidden>·</span>}
              <Link
                href={`/${s.slug}`}
                aria-current={isCurrent ? "page" : undefined}
              >
                {s.title}
              </Link>
            </Fragment>
          );
        })}
      </nav>
    </header>
  );
}
