export type Section = {
  slug: string;
  title: string;
  eyebrow: string;
};

export const sections: Section[] = [
  {
    slug: "experience",
    title: "Experience",
    eyebrow: "Jobs, internships, and volunteer work.",
  },
  {
    slug: "projects",
    title: "Projects",
    eyebrow: "Things I've built.",
  },
  {
    slug: "education",
    title: "Education",
    eyebrow: "Main focus.",
  },
];

export function getSection(slug: string): Section {
  const s = sections.find((sec) => sec.slug === slug);
  if (!s) throw new Error(`Unknown section slug: ${slug}`);
  return s;
}
