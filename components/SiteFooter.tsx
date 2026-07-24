export default function SiteFooter({ home = false }: { home?: boolean }) {
  return (
    <footer className={`colophon${home ? " home" : ""}`}>
      <div className="rights">© {new Date().getFullYear()} Ivan Shishkin. All rights reserved.</div>
    </footer>
  );
}
