import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PortraitCarousel from "@/components/PortraitCarousel";
import Contacts from "@/components/Contacts";
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
              My name is Ivan Shishkin, and I study computer science at the{" "}
              <a
                className="uci-mark"
                href="https://uci.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of California, Irvine
              </a>
              , with a specialization in intelligent systems.
            </p>
            <p className="hero-principle">
              My main focus actually revolves around this simple principle:{" "}
              <em>Do the hard thing and be the best at the many things I care for.</em>
            </p>
          </div>
        </div>
      </section>

      <Contacts />

      <Contents />

      <SiteFooter home />
    </main>
  );
}
