import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ReadingList from "@/components/ReadingList";

export const metadata: Metadata = {
  title: "Reading List",
  description: "Everything I've read worth keeping — searchable, by source.",
};

export default function ReadingPage() {
  return (
    <main className="page" data-screen-label="Reading List">
      <SiteHeader />
      <nav className="subnav">
        <Link className="home" href="/education#self-education">← Education</Link>
        <span className="sep">/</span>
        <span>Reading List</span>
      </nav>
      <header className="section-head">
        <div className="title-row">
          <span className="num">§</span>
          <h1>Reading List</h1>
        </div>
      </header>
      <article>
        <ReadingList />
      </article>
      <SiteFooter />
    </main>
  );
}
