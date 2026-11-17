"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  consumed,
  categoryOf,
  sourceOf,
  hostOf,
  minutesOf,
  CATEGORIES,
  type ConsumedEntry,
} from "@/content/consumed";
import { FAVICON_HOSTS } from "@/content/favicons";
import SourceMonogram from "./SourceMonogram";

const ALL = "All";

type IndexedEntry = ConsumedEntry & {
  category: string;
  label: string;
  minutes: number;
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
    minutes: minutesOf(entry),
    favicon: FAVICON_HOSTS.has(host) ? `/favicons/${host}.png` : null,
    haystack:
      `${entry.title} ${entry.author ?? ""} ${source} ${category}`.toLowerCase(),
  };
});

const PRESENT: string[] = CATEGORIES.filter((c) =>
  ENTRIES.some((e) => e.category === c),
);

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${Math.round(minutes)} min`;
  const hours = minutes / 60;
  const shown = hours < 10 ? Math.round(hours * 10) / 10 : Math.round(hours);
  return `${shown} ${shown === 1 ? "hour" : "hours"}`;
}

// Reads ?q= (the terminal's grep lands here with one). Kept in its own Suspense
// boundary so the list itself still renders into the static HTML.
function QueryFromUrl({ onQuery }: { onQuery: (q: string) => void }) {
  const q = useSearchParams().get("q");
  useEffect(() => {
    if (q !== null) onQuery(q);
  }, [q, onQuery]);
  return null;
}

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

  const minutes = useMemo(() => {
    const map = new Map<string, number>();
    for (const e of matchesQuery) {
      map.set(e.category, (map.get(e.category) ?? 0) + e.minutes);
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
      <Suspense fallback={null}>
        <QueryFromUrl onQuery={setQuery} />
      </Suspense>
      <div className="consumed-tools">
        {results.length > 0 && (
          <p className="consumed-hours">
            <strong>
              ≈ {formatDuration(results.reduce((sum, e) => sum + e.minutes, 0))}
            </strong>{" "}
            across {results.length} {results.length === 1 ? "piece" : "pieces"}
          </p>
        )}
        {matchesQuery.length > 0 && (
          <div className="consumed-diet" role="group" aria-label="Estimated time spent on each medium">
            {PRESENT.filter((name) => counts.get(name)).map((name) => (
              <button
                key={name}
                type="button"
                className={`consumed-diet-part${category !== ALL && name !== category ? " dim" : ""}`}
                data-category={name}
                style={{ flexGrow: minutes.get(name) }}
                title={`${name}: ≈ ${formatDuration(minutes.get(name) ?? 0)}`}
                aria-label={`${name}: about ${formatDuration(minutes.get(name) ?? 0)}`}
                aria-pressed={name === category}
                onClick={() => setCategory(name === category ? ALL : name)}
              />
            ))}
          </div>
        )}
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
