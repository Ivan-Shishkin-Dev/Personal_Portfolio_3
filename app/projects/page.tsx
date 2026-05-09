import type { Metadata } from "next";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built — class, club, and side.",
};

export default function ProjectsPage() {
  return (
    <SectionLayout slug="projects">
      <div className="entries">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <div className="project-head">
              <h3>{p.title}</h3>
              <span className="year">{p.year}</span>
            </div>
            <div className="blurb">{p.blurb}</div>
            <div className="meta-row">
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="links">
                {p.links.map((l) => {
                  const isExternal = /^(https?:|mailto:)/.test(l.href);
                  if (isExternal) {
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
        ))}
      </div>
    </SectionLayout>
  );
}
