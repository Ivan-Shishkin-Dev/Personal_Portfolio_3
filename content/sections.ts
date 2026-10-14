export type Section = {
  slug: string;
  title: string;
  icon: string;
};

export const sections: Section[] = [
  {
    slug: "experience",
    icon: "💼",
    title: "Experience",
  },
  {
    slug: "projects",
    icon: "🛠️",
    title: "Projects",
  },
  {
    slug: "education",
    icon: "🎓",
    title: "Education",
  },
];

export function getSection(slug: string): Section {
  const s = sections.find((sec) => sec.slug === slug);
  if (!s) throw new Error(`Unknown section slug: ${slug}`);
  return s;
}
