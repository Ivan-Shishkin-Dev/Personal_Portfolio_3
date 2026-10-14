import Image from "next/image";
import Link from "next/link";
import TerminalButton from "./TerminalButton";

export type Crumb = { href: string; label: string; icon?: string };

export default function Topbar({ crumbs = [] }: { crumbs?: Crumb[] }) {
  return (
    <header className="topbar">
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/" className="crumb">
          <Image
            src="/headshot.png"
            alt=""
            width={20}
            height={20}
            className="crumb-avatar"
          />
          <span>Ivan Shishkin</span>
        </Link>
        {crumbs.map((c, i) => (
          <span key={c.href} className="crumb-step">
            <span className="crumb-sep" aria-hidden="true">/</span>
            <Link
              href={c.href}
              className="crumb"
              aria-current={i === crumbs.length - 1 ? "page" : undefined}
            >
              {c.icon ? <span aria-hidden="true">{c.icon}</span> : null}
              <span>{c.label}</span>
            </Link>
          </span>
        ))}
      </nav>
      <TerminalButton />
    </header>
  );
}
