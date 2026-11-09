import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Topbar from "@/components/Topbar";
import NotFoundHint from "@/components/NotFoundHint";
import { emojiIcon } from "@/content/sections";

export const metadata: Metadata = {
  title: "Not found",
  icons: emojiIcon("🫥"),
};

export default function NotFound() {
  return (
    <>
      <Topbar />
      <main className="page" data-screen-label="404">
        <PageHead icon="🫥" title="Not found" sub="There is no page at this address." />
        <article>
          <NotFoundHint />
        </article>
        <SiteNav />
        <SiteFooter />
      </main>
    </>
  );
}
