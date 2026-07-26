"use client";

import { useMemo, useState } from "react";
import {
  consumed,
  categoryOf,
  sourceOf,
  hostOf,
  CATEGORIES,
  type ConsumedEntry,
} from "@/content/consumed";
import { FAVICON_HOSTS } from "@/content/favicons";
import SourceMonogram from "./SourceMonogram";

const ALL = "All";

type IndexedEntry = ConsumedEntry & {
  category: string;
  label: string;
  favicon: string | null;
  haystack: string;
};

// consumed.ts is kept in the order things were added; newest reads first here.
const ENTRIES: IndexedEntry[] = consumed.toReversed().map((entry) => {
  const category = categoryOf(entry);
  const source = sourceOf(entry);
  const host = entry.url ? hostOf(entry.url) : "";
  return {
    ...entry,
    category,
    label: source || entry.author || entry.title,
    favicon: FAVICON_HOSTS.has(host) ? `/favicons/${host}.png` : null,
    haystack:
      `${entry.title} ${entry.author ?? ""} ${source} ${category}`.toLowerCase(),
  };
});

const PRESENT: string[] = CATEGORIES.filter((c) =>
  ENTRIES.some((e) => e.category === c),
);

export default function ConsumedContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);

  const matchesQuery = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return ENTRIES;
    return ENTRIES.filter((e) => e.haystack.includes(needle));
  }, [query]);

  const counts = useMemo(() => {
    const map = new Map<string, number>([[ALL, matchesQuery.length]]);
    for (const e of matchesQuery) {
      map.set(e.category, (map.get(e.category) ?? 0) + 1);
    }
    return map;
  }, [matchesQuery]);

  const results = useMemo(
    () =>
      category === ALL
        ? matchesQuery
        : matchesQuery.filter((e) => e.category === category),
    [matchesQuery, category],
  );

  return (
    <>
      <div className="consumed-tools">
        <input
          type="search"
          className="consumed-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${ENTRIES.length} pieces`}
          aria-label="Search consumed content"
          autoComplete="off"
          spellCheck={false}
        />
        <div className="consumed-filters">
          {[ALL, ...PRESENT].map((name) => {
            const count = counts.get(name) ?? 0;
            return (
              <button
                key={name}
                type="button"
                className={`consumed-filter${name === category ? " active" : ""}`}
                aria-pressed={name === category}
                disabled={count === 0 && name !== category}
                onClick={() => setCategory(name)}
              >
                {name}
                <span className="count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="consumed-empty">Nothing matches that.</p>
      ) : (
        <ol className="consumed-list">
          {results.map((entry) => (
            <li
              className="consumed-item"
              data-category={entry.category}
              key={entry.url ?? entry.title}
            >
              <span className="idx" title={entry.category}>
                {entry.favicon ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={entry.favicon} alt="" loading="lazy" />
                ) : (
                  <SourceMonogram source={entry.label} />
                )}
              </span>
              <span className="row-body">
                {entry.url ? (
                  <a
                    className="title"
                    href={entry.url}
                    title={entry.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.title}
                  </a>
                ) : (
                  <span className="title" title={entry.title}>
                    {entry.title}
                  </span>
                )}
                {entry.author ? (
                  <span className="by">{entry.author}</span>
                ) : null}
              </span>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
