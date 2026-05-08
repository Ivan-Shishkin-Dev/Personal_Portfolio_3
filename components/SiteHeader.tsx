import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader({ nameAsLink }: { nameAsLink: boolean }) {
  return (
    <header className="site-head">
      {nameAsLink ? (
        <Link className="name" href="/">Ivan Shishkin</Link>
      ) : (
        <span className="name">Ivan Shishkin</span>
      )}
      <span className="meta"><ThemeToggle /></span>
    </header>
  );
}
