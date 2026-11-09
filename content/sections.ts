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

// Notion puts the page's own emoji in the browser tab; an inline SVG does the same without an image file per page.
export function emojiIcon(emoji: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`;
  return { icon: `data:image/svg+xml,${encodeURIComponent(svg)}` };
}

export function sectionIcon(slug: string) {
  return emojiIcon(getSection(slug).icon);
}
