const LAST_EDITED = new Date(process.env.NEXT_PUBLIC_LAST_EDITED ?? Date.now());

const label = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Los_Angeles",
}).format(LAST_EDITED);

export default function SiteFooter() {
  return (
    <footer className="colophon">
      Last edited <time dateTime={LAST_EDITED.toISOString()}>{label}</time> by Ivan Shishkin
    </footer>
  );
}
