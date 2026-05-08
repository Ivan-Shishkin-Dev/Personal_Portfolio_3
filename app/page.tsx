import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PortraitCarousel from "@/components/PortraitCarousel";
import Sparks from "@/components/Sparks";
import Contents from "@/components/Contents";

export default function Home() {
  return (
    <main className="page" data-screen-label="Home">
      <SiteHeader nameAsLink={false} />

      <section className="hero">
        <PortraitCarousel />
        <div className="hero-text">
          <div>
            <div className="eyebrow">An introduction</div>
            <h1 className="title">
              Ivan<br /><em>Shishkin.</em>
            </h1>
            <p className="hero-bio">
              I study computer science at <em>UC Irvine</em>, but my real interest is personal progression — whatever gets me better than I was before. Right now, it&apos;s probably the field of AI. I care; that&apos;s a good summary.
            </p>
          </div>
        </div>
      </section>

      <p className="lede" hidden>
        Computer-science student at <em>UC Irvine</em>, working on AI systems that behave the way we expect them to.
      </p>

      <Sparks />

      <Contents />

      <SiteFooter home />
    </main>
  );
}
