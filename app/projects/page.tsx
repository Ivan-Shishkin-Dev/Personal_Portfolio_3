import type { Metadata } from "next";
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
            <div>
              <h3>{p.title}</h3>
              <div className="blurb">{p.blurb}</div>
              <div className="meta-row">
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                {p.links.map((l) => {
                  const isExternal = /^(https?:|mailto:)/.test(l.href);
                  return isExternal ? (
                    <a
                      className="link"
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <a className="link" key={l.label} href={l.href}>
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="year">{p.year}</div>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}
