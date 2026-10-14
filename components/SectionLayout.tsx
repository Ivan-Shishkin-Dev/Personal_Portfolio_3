import PageHead from "./PageHead";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import Topbar from "./Topbar";
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
    <>
      <Topbar crumbs={[{ href: `/${s.slug}`, label: s.title, icon: s.icon }]} />
      <main className="page" data-screen-label={s.title}>
        <PageHead icon={s.icon} title={s.title} sub={s.eyebrow} />
        <article>{children}</article>
        <SiteNav currentSlug={slug} />
        <SiteFooter />
      </main>
    </>
  );
}
