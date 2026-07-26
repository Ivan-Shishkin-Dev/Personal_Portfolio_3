"use client";

import { useMemo, useState } from "react";
import {
  reading,
  categoryOf,
  sourceOf,
  CATEGORIES,
  type ReadingEntry,
} from "@/content/reading";
import CategoryIcon from "./CategoryIcon";

const ALL = "All";

type IndexedEntry = ReadingEntry & {
  category: string;
  haystack: string;
};

// reading.ts is kept in the order things were added; newest reads first here.
const ENTRIES: IndexedEntry[] = reading.toReversed().map((entry) => {
  const category = categoryOf(entry);
  const source = sourceOf(entry);
  return {
    ...entry,
    category,
    haystack:
      `${entry.title} ${entry.author ?? ""} ${source} ${category}`.toLowerCase(),
  };
});

const PRESENT: string[] = CATEGORIES.filter((c) =>
  ENTRIES.some((e) => e.category === c),
);

export default function ReadingList() {
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
      <div className="reading-tools">
        <input
          type="search"
          className="reading-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${ENTRIES.length} pieces`}
          aria-label="Search reading list"
          autoComplete="off"
          spellCheck={false}
        />
        <div className="reading-filters">
          {[ALL, ...PRESENT].map((name) => {
            const count = counts.get(name) ?? 0;
            return (
              <button
                key={name}
                type="button"
                className={`reading-filter${name === category ? " active" : ""}`}
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
        <p className="reading-empty">Nothing matches that.</p>
      ) : (
        <ol className="reading-list">
          {results.map((entry) => (
            <li
              className="reading-item"
              data-category={entry.category}
              key={entry.url ?? entry.title}
            >
              <span className="idx" title={entry.category}>
                <CategoryIcon category={entry.category} />
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
