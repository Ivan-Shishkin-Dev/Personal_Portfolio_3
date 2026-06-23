export type Section = {
  index: number;
  numeral: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
};

export const sections: Section[] = [
  {
    index: 1,
    numeral: "I",
    slug: "about",
    title: "About",
    eyebrow: "Learn more about me.",
    description: "Learn more about me.",
  },
  {
    index: 2,
    numeral: "II",
    slug: "experience",
    title: "Experience",
    eyebrow: "Jobs, internships, and volunteer work.",
    description: "Jobs, internships, and volunteer work.",
  },
  {
    index: 3,
    numeral: "III",
    slug: "skills",
    title: "Skills",
    eyebrow: "Languages, tools, other.",
    description: "Languages, tools, other.",
  },
  {
    index: 4,
    numeral: "IV",
    slug: "projects",
    title: "Projects",
    eyebrow: "Things I've built.",
    description: "Things I've built.",
  },
  {
    index: 5,
    numeral: "V",
    slug: "education",
    title: "Education",
    eyebrow: "Main focus.",
    description: "Main focus.",
  },
  {
    index: 6,
    numeral: "VI",
    slug: "contact",
    title: "Contact",
    eyebrow: "Ways to reach me.",
    description: "Ways to reach me.",
  },
];

export function getSection(slug: string): Section {
  const s = sections.find((sec) => sec.slug === slug);
  if (!s) throw new Error(`Unknown section slug: ${slug}`);
  return s;
}

export function getNeighbors(slug: string): {
  prev: Section | null;
  next: Section | null;
} {
  const i = sections.findIndex((sec) => sec.slug === slug);
  return {
    prev: i > 0 ? sections[i - 1] : null,
    next: i >= 0 && i < sections.length - 1 ? sections[i + 1] : null,
  };
}
