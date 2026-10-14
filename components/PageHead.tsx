import Link from "next/link";

export default function PageHead({
  title,
  sub,
  backHref = "/",
  backLabel = "Ivan Shishkin",
}: {
  title: string;
  sub?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="section-head">
      <Link className="back" href={backHref}>← {backLabel}</Link>
      <h1>{title}</h1>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </header>
  );
}
