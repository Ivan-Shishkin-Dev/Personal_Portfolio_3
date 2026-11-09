"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/content/sections";

const PAGES = [...sections.map((s) => s.slug), "consumed-content"];

function distance(a: string, b: string): number {
  let row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const next = [i];
    for (let j = 1; j <= b.length; j++) {
      next[j] = Math.min(
        row[j] + 1,
        next[j - 1] + 1,
        row[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    row = next;
  }
  return row[b.length];
}

function nearest(typed: string): string | null {
  const needle = typed.toLowerCase();
  const [best] = PAGES.map((page) => ({ page, d: distance(needle, page) })).sort(
    (a, b) => a.d - b.d,
  );
  return best.d <= Math.max(2, Math.floor(best.page.length / 3)) ? best.page : null;
}

export default function NotFoundHint() {
  const typed = decodeURIComponent(usePathname()).replace(/^\/+|\/+$/g, "");
  const guess = nearest(typed.split("/")[0]);

  return (
    <>
      <pre className="term-block">
        <span className="term-user">$</span> cd {typed}
        {"\n"}
        <span className="term-err">cd: no such page: {typed}</span>
      </pre>
      <p>
        {guess ? (
          <>
            Did you mean <Link href={`/${guess}`}>{guess}</Link>? Otherwise head{" "}
          </>
        ) : (
          <>Whatever you were looking for has moved or never existed. Head </>
        )}
        <Link href="/">home</Link> and look around from there.
      </p>
    </>
  );
}
