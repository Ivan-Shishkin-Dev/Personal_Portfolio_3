import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <main className="page" data-screen-label="404">
      <SiteHeader />
      <header className="section-head">
        <div className="eyebrow">There is no page at this address.</div>
        <div className="title-row">
          <span className="num">404</span>
          <h1>Not Found</h1>
        </div>
      </header>
      <article>
        <p>
          Whatever you were looking for has moved or never existed. Head{" "}
          <Link href="/">home</Link> and look around from there.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
