export type Section = {
  slug: string;
  title: string;
  icon: string;
  eyebrow?: string;
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
    eyebrow: "Main focus.",
  },
];

export function getSection(slug: string): Section {
  const s = sections.find((sec) => sec.slug === slug);
  if (!s) throw new Error(`Unknown section slug: ${slug}`);
  return s;
}
