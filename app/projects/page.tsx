import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

const isExternalHref = (href: string) => /^(https?:|mailto:)/.test(href);

export default function ProjectsPage() {
  return (
    <SectionLayout slug="projects">
      <div className="entries">
        {projects.map((p, i) => {
          const primary = p.links[0];
          return (
          <Fragment key={p.title}>
            {projects[i - 1]?.group !== p.group && (
              <h2 className="group-label">{p.group}</h2>
            )}
            <article className="project">
              <div className="project-head">
                <h3>
                  {primary ? (
                    isExternalHref(primary.href) ? (
                      <a
                        className="project-title-link"
                        href={primary.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.title}
                      </a>
                    ) : (
                      <Link className="project-title-link" href={primary.href}>
                        {p.title}
                      </Link>
                    )
                  ) : (
                    p.title
                  )}
                </h3>
                <span className="year">{p.year}</span>
              </div>
              <p className="blurb">{p.blurb}</p>
              <div className="meta-row">
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="links">
                  {p.links.map((l) => {
                    if (isExternalHref(l.href)) {
                      return (
                        <a
                          className="link"
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l.label}
                        </a>
                      );
                    }
                    return (
                      <Link className="link" key={l.label} href={l.href}>
                        {l.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          </Fragment>
          );
        })}
      </div>
    </SectionLayout>
  );
}
