import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ConsumedContent from "@/components/ConsumedContent";

export const metadata: Metadata = {
  title: "Consumed Content",
  description: "Everything I've read worth keeping — searchable, by source.",
};

export default function ConsumedContentPage() {
  return (
    <main className="page" data-screen-label="Consumed Content">
      <PageHead
        title="Consumed content"
        backHref="/education#self-education"
        backLabel="Education"
      />
      <article>
        <ConsumedContent />
      </article>
      <SiteNav />
      <SiteFooter />
    </main>
  );
}
