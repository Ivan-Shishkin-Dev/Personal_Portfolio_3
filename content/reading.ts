export const CATEGORIES = [
  "Papers",
  "Essays",
  "Books",
  "Podcasts",
  "Videos",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type ReadingEntry = {
  title: string;
  url?: string;
  author?: string;
  /** Overrides the category derived from the URL host. */
  category?: Category;
  /** Overrides the source derived from the URL host. */
  source?: string;
};

const CATEGORY_BY_HOST: Record<string, Category> = {
  "arxiv.org": "Papers",
  "biorxiv.org": "Papers",
  "distill.pub": "Papers",
  "nature.com": "Papers",
  "science.org": "Papers",
  "pnas.org": "Papers",
  "openreview.net": "Papers",
  "acm.org": "Papers",
  "ieee.org": "Papers",
  "youtube.com": "Videos",
  "youtu.be": "Videos",
  "vimeo.com": "Videos",
  "podcasts.apple.com": "Podcasts",
  "open.spotify.com": "Podcasts",
  "overcast.fm": "Podcasts",
  "dwarkesh.com": "Podcasts",
  "lexfridman.com": "Podcasts",
};

const SOURCE_BY_HOST: Record<string, string> = {
  "lesswrong.com": "LessWrong",
  "alignmentforum.org": "Alignment Forum",
  "arxiv.org": "arXiv",
  "distill.pub": "Distill",
  "openreview.net": "OpenReview",
  "substack.com": "Substack",
  "anthropic.com": "Anthropic",
  "openai.com": "OpenAI",
  "deepmind.google": "DeepMind",
  "paulgraham.com": "Paul Graham",
  "stratechery.com": "Stratechery",
  "astralcodexten.com": "Astral Codex Ten",
  "slatestarcodex.com": "Slate Star Codex",
  "marginalrevolution.com": "Marginal Revolution",
  "waitbutwhy.com": "Wait But Why",
  "dwarkesh.com": "Dwarkesh",
  "lexfridman.com": "Lex Fridman",
  "80000hours.org": "80,000 Hours",
  "wikipedia.org": "Wikipedia",
  "github.com": "GitHub",
  "youtube.com": "YouTube",
  "youtu.be": "YouTube",
  "open.spotify.com": "Spotify",
  "podcasts.apple.com": "Apple Podcasts",
  "x.com": "X",
  "twitter.com": "X",
  "nature.com": "Nature",
  "medium.com": "Medium",
  "nytimes.com": "NYT",
};

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function lookup<T>(host: string, table: Record<string, T>): T | undefined {
  for (const [suffix, value] of Object.entries(table)) {
    if (host === suffix || host.endsWith(`.${suffix}`)) return value;
  }
  return undefined;
}

export function categoryOf(entry: ReadingEntry): Category {
  if (entry.category) return entry.category;
  const host = entry.url ? hostOf(entry.url) : "";
  if (!host) return "Books";
  return lookup(host, CATEGORY_BY_HOST) ?? "Essays";
}

export function sourceOf(entry: ReadingEntry): string {
  if (entry.source) return entry.source;
  const host = entry.url ? hostOf(entry.url) : "";
  if (!host) return "";
  const known = lookup(host, SOURCE_BY_HOST);
  if (known) return known;

  const base = host.split(".").slice(0, -1).pop() ?? host;
  return base.charAt(0).toUpperCase() + base.slice(1);
}

export const reading: ReadingEntry[] = [
  {
    title: "Do they know that we know that they know?",
    url: "https://www.youtube.com/watch?v=hzlR0R91lZA",
    author: "Rational Animations",
  },
  {
    title: "You should, unfortunately, be worried about Sam Altman.",
    url: "https://www.youtube.com/watch?v=_eYTkvZqbnQ",
    author: "AI In Context",
  },
  {
    title: "The A.I. Dilemma",
    url: "https://www.youtube.com/watch?v=xoVJKj8lcNQ",
    author: "Center for Humane Technology",
  },
  {
    title: "Large Language Models explained briefly",
    url: "https://www.youtube.com/watch?v=LPZh9BOjkQs",
    author: "3Blue1Brown",
  },
  {
    title: "If you remember one AI disaster, make it this one",
    url: "https://www.youtube.com/watch?v=r_9wkavYt4Y",
    author: "AI In Context",
  },
  {
    title: "Rohin Shah — How to Theorize So Empiricists Will Listen",
    url: "https://www.youtube.com/watch?v=BWHbxv5kxLI",
    author: "FAR.AI",
  },
  {
    title: "We're Not Ready for Superintelligence",
    url: "https://www.youtube.com/watch?v=5KVDDfAkRgc",
    author: "AI In Context",
  },
  {
    title: "Grant Sanderson — AI disproved a famous math conjecture. Now what?",
    url: "https://www.youtube.com/watch?v=TfyPshgMbug",
    author: "Dwarkesh Patel",
    category: "Podcasts",
  },
  {
    title: "Richard Ngo — Reframing AGI Threat Models",
    url: "https://www.youtube.com/watch?v=4v3uqWeVmco",
    author: "FAR.AI",
  },
  {
    title: "Using Dangerous AI, But Safely?",
    url: "https://www.youtube.com/watch?v=0pgEMWy70Qk",
    author: "Robert Miles AI Safety",
  },
  {
    title: "Unfortunately, You Need to Know What the Jevons Paradox is",
    url: "https://www.youtube.com/watch?v=a6sYYrLTOjQ",
    author: "Hank Green",
  },
  {
    title: "The Scout Mindset by Julia Galef — Core Message",
    url: "https://www.youtube.com/watch?v=5L3CbdjeNRA",
    author: "Productivity Game",
  },
  {
    title: "A visual guide to Bayesian thinking",
    url: "https://www.youtube.com/watch?v=BrK7X_XlGB8",
    author: "Julia Galef",
  },
  {
    title: "Why AI Safety Needs Founders — Ryan Kidd",
    url: "https://www.youtube.com/watch?v=XjZ0gPAKBKA",
    author: "BlueDot Impact",
  },
  {
    title: "What does the next training paradigm look like?",
    url: "https://www.youtube.com/watch?v=20p5-kQXF_Q",
    author: "Dwarkesh Patel",
    category: "Podcasts",
  },
  {
    title: "Understanding the inner thoughts of AI",
    url: "https://www.youtube.com/watch?v=1DtMiRKg-cs",
    author: "Google DeepMind",
  },
  {
    title: "Dario Amodei — We are near the end of the exponential",
    url: "https://www.youtube.com/watch?v=n1E9IZfvGMA",
    author: "Dwarkesh Patel",
    category: "Podcasts",
  },
  {
    title: "Constellation Seminar: Scaling AI Safety",
    url: "https://www.youtube.com/watch?v=P5rO5kHiw_8",
    author: "Ryan Kidd",
  },
  {
    title: "What Happens When Capitalism Doesn't Need Workers Anymore?",
    url: "https://www.youtube.com/watch?v=yhpyHV1iz00",
    author: "Economics Explained",
  },
  {
    title:
      "Aaron Scher — What Would it Take to Stop the Development of Superintelligence?",
    url: "https://www.youtube.com/watch?v=vxKaHHK-PSM",
    author: "FAR.AI",
  },
  {
    title: "What the hell happened with AGI timelines in 2025?",
    url: "https://www.youtube.com/watch?v=YeRS4TbtZWA",
    author: "80,000 Hours",
    category: "Podcasts",
  },
  {
    title:
      "Carl Shulman (Pt 1) — Intelligence explosion, primate evolution, robot doublings, & alignment",
    url: "https://www.youtube.com/watch?v=_kRg-ZP1vQc",
    author: "Dwarkesh Patel",
    category: "Podcasts",
  },
  {
    title: "This best-selling book is freaking out national security advisors",
    url: "https://www.youtube.com/watch?v=Nl7-bRFSZBs",
    author: "AI In Context",
  },
  {
    title: "Tyler Cowen — The #1 bottleneck to AI progress is humans",
    url: "https://www.youtube.com/watch?v=GT_sXIUJPUo",
    author: "Dwarkesh Patel",
    category: "Podcasts",
  },
  {
    title:
      "He Risked Everything To Warn You: No One Is Ready For What's Coming",
    url: "https://www.youtube.com/watch?v=_g4l7YkDQwA",
    author: "The Diary Of A CEO",
    category: "Podcasts",
  },
  {
    title: "Robin Hanson on AI and Large Language Models",
    url: "https://www.youtube.com/watch?v=noXFS-ZPb6k",
    author: "Closer To Truth",
    category: "Podcasts",
  },
  {
    title: "The OpenAI/Huggingface incident",
    url: "https://www.youtube.com/watch?v=Vtk8YLgYU4g",
    author: "Buck Shlegeris",
    category: "Podcasts",
  },
];
