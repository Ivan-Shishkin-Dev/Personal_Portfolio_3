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
          return (
          <Fragment key={p.title}>
            {projects[i - 1]?.group !== p.group && (
              <h2 className="group-label">{p.group}</h2>
            )}
            <article className="project">
              <div className="project-head">
                <h3>
                  {p.href ? (
                    isExternalHref(p.href) ? (
                      <a
                        className="project-title-link"
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.title}
                      </a>
                    ) : (
                      <Link className="project-title-link" href={p.href}>
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
              {p.video && (
                <video
                  className="project-video"
                  controls
                  playsInline
                  preload="none"
                  poster={p.video.poster}
                  aria-label={`${p.title} demo video`}
                >
                  <source src={p.video.src} type="video/mp4" />
                  Your browser does not support embedded video.{" "}
                  <a href={p.video.src}>Download the demo video.</a>
                </video>
              )}
            </article>
          </Fragment>
          );
        })}
      </div>
    </SectionLayout>
  );
}
