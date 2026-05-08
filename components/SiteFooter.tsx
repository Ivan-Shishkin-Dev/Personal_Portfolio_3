export default function SiteFooter({ home = false }: { home?: boolean }) {
  return (
    <footer className={`colophon${home ? " home" : ""}`}>
      <div className="rights">© 2026 Ivan Shishkin. All rights reserved.</div>
    </footer>
  );
}
