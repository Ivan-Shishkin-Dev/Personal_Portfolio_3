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
  "effectivealtruism.org": "EA Forum",
  "ifp.org": "IFP",
  "bbc.com": "BBC",
  "writingruxandrabio.com": "Ruxandra Teslo",
  "redwoodresearch.org": "Redwood Research",
  "oneusefulthing.org": "One Useful Thing",
  "bluedot.org": "BlueDot",
  "house.gov": "U.S. House",
  "rand.org": "RAND",
  "archive.ph": "Archive.today",
  "antischeming.ai": "Anti-Scheming",
  "deepignorance.ai": "Deep Ignorance",
  "cold-takes.com": "Cold Takes",
  "metr.org": "METR",
  "civai.org": "CivAI",
  "tomaspueyo.com": "Uncharted Territories",
  "federalreserve.gov": "Federal Reserve",
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

// Oldest first — add new entries at the bottom. The page renders newest first.
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
  {
    title: "Preparing for Launch",
    url: "https://ifp.org/preparing-for-launch/",
    author: "Institute for Progress",
  },
  {
    title:
      "Help us launch AI safety university groups by referring potential founders",
    url: "https://forum.effectivealtruism.org/posts/Wjg5htFNeYkxNaRnk/help-us-launch-ai-safety-university-groups-by-referring",
    author: "Jason Chin",
  },
  {
    title: "Against Learning From Dramatic Events",
    url: "https://www.astralcodexten.com/p/against-learning-from-dramatic-events",
    author: "Scott Alexander",
  },
  {
    title:
      "OpenAI says its AI went rogue and launched 'unprecedented' cyber-attack",
    url: "https://www.bbc.com/news/articles/c3ek3gvdnj3o",
    author: "BBC News",
  },
  {
    title: "Model access for third-parties — it's a big deal!",
    url: "https://www.lesswrong.com/s/zRm8c2oCn2FCdzsNn/p/RuGZ5tMdqpnraJahJ",
    author: "Cleo Nardo",
  },
  {
    title: "The Market for Lemons",
    url: "https://en.wikipedia.org/wiki/The_Market_for_Lemons",
    author: "Wikipedia",
  },
  {
    title: "Utopia for Realists (Chapters 1–2)",
    url: "https://drive.google.com/file/d/1nh-Km2J2C99s_LYxby-N53EnZgM2uXHZ/view",
    author: "Rutger Bregman",
    category: "Books",
    source: "PDF",
  },
  {
    title: "In search of a dynamist vision for safe superhuman AI",
    url: "https://helentoner.substack.com/p/dynamism-vs-stasis",
    author: "Helen Toner",
  },
  {
    title: "Intelligence is not the main bottleneck",
    url: "https://www.writingruxandrabio.com/p/intelligence-is-not-the-main-bottleneck",
    author: "Ruxandra Teslo",
  },
  {
    title:
      "Give Up Seventy Percent Of The Way Through The Hyperstitious Slur Cascade",
    url: "https://www.astralcodexten.com/p/give-up-seventy-percent-of-the-way",
    author: "Scott Alexander",
  },
  {
    title: "You Will Listen to Carl on Dwarkesh",
    url: "https://frommatter.substack.com/p/you-will-listen-to-carl-on-dwarkesh",
    author: "Matt Reardon",
  },
  {
    title: "It's practically impossible to run a big AI company ethically",
    url: "https://archive.ph/9DCPq",
    author: "Vox Future Perfect",
    source: "Vox",
  },
  {
    title: "Silicon Valley's Safe Space",
    url: "https://www.nytimes.com/2021/02/13/technology/slate-star-codex-rationalists.html",
    author: "Cade Metz",
  },
  {
    title:
      "An analysis of AI-generated content at the Mechanistic Interpretability Workshop",
    url: "https://www.lesswrong.com/posts/r7FBQ8XDs6qBYc4K4/an-analysis-of-ai-generated-content-at-the-mechanistic",
    author: "Andy Arditi",
  },
  {
    title:
      "Recent LLMs can use filler tokens or problem repeats to improve (no-CoT) math performance",
    url: "https://blog.redwoodresearch.org/p/recent-llms-can-use-filler-tokens",
    author: "Ryan Greenblatt",
  },
  {
    title:
      "Reps. Lieu and Moran Introduce Bill to Require Kill Switch for AI Systems That Can Cause Catastrophic Harm",
    url: "https://lieu.house.gov/media-center/press-releases/reps-lieu-and-moran-introduce-bill-require-kill-switch-ai-systems-can",
    author: "Office of Rep. Ted Lieu",
  },
  {
    title:
      "Reading Between the Dots: Decoding Hidden Computation across Filler Tokens",
    url: "https://arxiv.org/abs/2607.03502",
    author: "Brauer et al.",
  },
  {
    title: "Seeking Stability in the Competition for AI Advantage",
    url: "https://www.rand.org/pubs/commentary/2025/03/seeking-stability-in-the-competition-for-ai-advantage.html",
    author: "Iskander Rehman",
  },
  {
    title: "Bayes' rule",
    url: "https://www.lesswrong.com/w/bayes-rule?lens=bayes-rule-guide",
    author: "LessWrong",
  },
  {
    title: "The Huggingface Incident",
    url: "https://www.astralcodexten.com/p/the-hugging-face-incident",
    author: "Scott Alexander",
  },
  {
    title: "Scaling: The State of Play in AI",
    url: "https://www.oneusefulthing.org/p/scaling-the-state-of-play-in-ai",
    author: "Ethan Mollick",
  },
  {
    title: "A Framework for Frontier AI and the Dawning of a New Age",
    url: "https://x.com/demishassabis/status/2076957440109625718",
    author: "Demis Hassabis",
  },
  {
    title: "Safety and alignment in an era of long-horizon models",
    url: "https://openai.com/index/safety-alignment-long-horizon-models/",
    author: "OpenAI",
  },
  {
    title: "Build Personal Moats",
    url: "https://eriktorenberg.substack.com/p/build-personal-moats",
    author: "Erik Torenberg",
  },
  {
    title: "What is AI alignment?",
    url: "https://blog.bluedot.org/p/what-is-ai-alignment",
    author: "Adam Jones",
  },
  {
    title: "Introduction to AI Control",
    url: "https://blog.bluedot.org/p/ai-control",
    author: "BlueDot",
  },
  {
    title:
      "What Do Neural Networks Really Learn? Exploring the Brain of an AI Model",
    url: "https://www.youtube.com/watch?v=jGCvY4gNnA8",
    author: "Rational Animations",
  },
  {
    title: "Introduction to Mechanistic Interpretability",
    url: "https://blog.bluedot.org/p/introduction-to-mechanistic-interpretability",
    author: "BlueDot",
  },
  {
    title: "Neel Nanda on the race to read AI minds (part 1)",
    url: "https://80000hours.org/podcast/episodes/neel-nanda-mechanistic-interpretability/",
    author: "80,000 Hours",
    category: "Podcasts",
  },
  {
    title: "Chain-of-Thought Snippets",
    url: "https://www.antischeming.ai/snippets",
    author: "Bronson Schoen",
    category: "Papers",
  },
  {
    title: "What is input data filtration in AI safety?",
    url: "https://blog.bluedot.org/p/data-filtration",
    author: "BlueDot",
  },
  {
    title: "The True Story of How GPT-2 Became Maximally Lewd",
    url: "https://www.youtube.com/watch?v=qV_rOlHjvvs",
    author: "Rational Animations",
  },
  {
    title:
      "Deep Ignorance: Filtering Pretraining Data Builds Tamper-Resistant Safeguards",
    url: "https://deepignorance.ai/",
    author: "O'Brien et al.",
    category: "Papers",
  },
  {
    title: "Specification Gaming: How AI Can Turn Your Wishes Against You",
    url: "https://www.youtube.com/watch?v=jQOBaGka7O0",
    author: "Rational Animations",
  },
  {
    title: "Why AI alignment could be hard with modern deep learning",
    url: "https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/",
    author: "Ajeya Cotra",
  },
  {
    title: "AI models can be dangerous before public deployment",
    url: "https://metr.org/blog/2025-01-17-ai-models-dangerous-before-public-deployment/",
    author: "METR",
  },
  {
    title: "When AI Chooses Harm Over Failure",
    url: "https://civai.org/p/agentic-misalignment",
    author: "CivAI",
  },
  {
    title: "The current SOTA model was released without safety evals",
    url: "https://www.lesswrong.com/posts/9woCWqiDbSFPXpxvn/the-current-sota-model-was-released-without-safety-evals",
    author: "Parv Mahajan",
  },
  {
    title: "The Most Important Time in History Is Now",
    url: "https://unchartedterritories.tomaspueyo.com/p/the-most-important-time-in-history-agi-asi",
    author: "Tomas Pueyo",
  },
  {
    title:
      "Federal Reserve announces the leadership and objectives of its task forces to advance the conduct of monetary policy",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260709a.htm",
    author: "Federal Reserve",
  },
  {
    title: "The AI Revolution: The Road to Superintelligence",
    url: "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
    author: "Tim Urban",
  },
  {
    title: "“Long” timelines to advanced AI have gotten crazy short",
    url: "https://helentoner.substack.com/p/long-timelines-to-advanced-ai-have",
    author: "Helen Toner",
  },
  {
    title:
      "OpenAI and Hugging Face partner to address security incident during model evaluation",
    url: "https://openai.com/index/hugging-face-model-evaluation-security-incident/",
    author: "OpenAI",
  },
  {
    title: "Advice for newly busy people",
    url: "https://amoretlicentia.substack.com/p/advice-for-newly-busy-people",
    author: "Sese",
  },
  {
    title: "Dual Process Theory (System 1 & System 2)",
    url: "https://www.lesswrong.com/w/dual-process-theory-system-1-and-system-2",
    author: "LessWrong",
  },
];
