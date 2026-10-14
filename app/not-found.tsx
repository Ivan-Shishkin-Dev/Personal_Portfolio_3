import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <main className="page" data-screen-label="404">
      <PageHead title="Not found" sub="There is no page at this address." />
      <article>
        <p>
          Whatever you were looking for has moved or never existed. Head{" "}
          <Link href="/">home</Link> and look around from there.
        </p>
      </article>
      <SiteNav />
      <SiteFooter />
    </main>
  );
}
