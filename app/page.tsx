import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Contacts from "@/components/Contacts";
import Contents from "@/components/Contents";

export default function Home() {
  return (
    <main className="page" data-screen-label="Home">
      <SiteHeader />

      <section className="hero hero-centered">
        <div className="hero-text">
          <div>
            <div className="eyebrow">An introduction</div>
            <h1 className="title">Ivan Shishkin</h1>
            <p className="hero-bio">
              I study computer science at the{" "}
              <a
                className="uci-mark"
                href="https://uci.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of California, Irvine
              </a>
              , with a specialization in Artificial Intelligence. This site is here for you to get to know me — please, look around.
            </p>
            <p className="hero-principle">
              <em>
                Do more,{" "}
                <a
                  href="https://www.benkuhn.net/abyss/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  do the hard thing
                </a>
                , until I'm the best at the things I care for.
              </em>
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
