export default function PageHead({
  icon,
  title,
  sub,
}: {
  icon?: string;
  title: string;
  sub?: string;
}) {
  return (
    <header className="section-head">
      {icon ? <div className="page-icon" aria-hidden="true">{icon}</div> : null}
      <h1>{title}</h1>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </header>
  );
}
