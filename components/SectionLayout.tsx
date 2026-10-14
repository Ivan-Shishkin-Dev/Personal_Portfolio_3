import PageHead from "./PageHead";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import { getSection } from "@/content/sections";

export default function SectionLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const s = getSection(slug);
  return (
    <main className="page" data-screen-label={s.title}>
      <PageHead title={s.title} sub={s.eyebrow} />
      <article>{children}</article>
      <SiteNav currentSlug={slug} />
      <SiteFooter />
    </main>
  );
}
