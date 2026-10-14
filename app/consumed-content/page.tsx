import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Topbar from "@/components/Topbar";
import ConsumedContent from "@/components/ConsumedContent";

export const metadata: Metadata = {
  title: "Consumed Content",
  description: "Everything I've read worth keeping — searchable, by source.",
};

export default function ConsumedContentPage() {
  return (
    <>
      <Topbar
        crumbs={[
          { href: "/education", label: "Education", icon: "🎓" },
          { href: "/consumed-content", label: "Consumed content", icon: "📚" },
        ]}
      />
      <main className="page" data-screen-label="Consumed Content">
        <PageHead icon="📚" title="Consumed content" />
        <article>
          <ConsumedContent />
        </article>
        <SiteNav />
        <SiteFooter />
      </main>
    </>
  );
}
