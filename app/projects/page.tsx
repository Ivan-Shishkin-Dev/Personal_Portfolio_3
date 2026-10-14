import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";
import Toggle from "@/components/Toggle";
import ExpandAll from "@/components/ExpandAll";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

const isExternalHref = (href: string) => /^(https?:|mailto:)/.test(href);

function ProjectTitle({ title, href }: { title: string; href?: string }) {
  if (!href) return <>{title}</>;
  if (isExternalHref(href)) {
    return (
      <a className="project-title-link" href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    );
  }
  return (
    <Link className="project-title-link" href={href}>
      {title}
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <SectionLayout slug="projects">
      <ExpandAll />
      <div className="toggles">
        {projects.map((p, i) => (
          <Fragment key={p.title}>
            {projects[i - 1]?.group !== p.group && (
              <h2 className="group-label">{p.group}</h2>
            )}
            <Toggle title={<ProjectTitle title={p.title} href={p.href} />} meta={p.year}>
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
            </Toggle>
          </Fragment>
        ))}
      </div>
    </SectionLayout>
  );
}
