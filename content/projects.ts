export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
  year: string;
};

export const projects: Project[] = [
  {
    title: "probe-kit",
    blurb:
      "A small library for activation patching and linear probing on small transformers. Came out of a curiosity about where factual associations actually live.",
    tags: ["Python", "PyTorch", "Interpretability"],
    links: [
      { label: "github.com/ivansh/probe-kit ↗", href: "#" },
    ],
    year: "2026",
  },
  {
    title: "holdout",
    blurb:
      "A personal eval harness — a couple of hundred prompts that probe specific failure modes I care about. Re-runs against every new model release.",
    tags: ["TypeScript", "Evaluations", "CLI"],
    links: [
      { label: "holdout.ivanshishkin.dev ↗", href: "#" },
    ],
    year: "2025",
  },
  {
    title: "tiny-transformers",
    blurb:
      "From-scratch implementations of GPT-2 and a small mixture-of-experts, written for my own understanding more than anything.",
    tags: ["Python", "PyTorch", "Notebooks"],
    links: [
      { label: "github.com/ivansh/tiny-transformers ↗", href: "#" },
    ],
    year: "2025",
  },
  {
    title: "Sift",
    blurb:
      "A reading-tracker built for myself — paper PDFs in, structured notes and citations out. Rough but mine.",
    tags: ["Next.js", "Postgres", "Personal"],
    links: [
      { label: "sift.ivanshishkin.dev ↗", href: "#" },
    ],
    year: "2024",
  },
];
