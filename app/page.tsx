import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FeedbackForm from "@/components/FeedbackForm";

export default function Home() {
  return (
    <main className="page page-home" data-screen-label="Home">
      <SiteHeader />

      <section className="hero hero-centered">
        <div className="hero-text">
          <div>
            <div className="hero-portrait">
              <Image
                src="/headshot.png"
                alt="Ivan Shishkin"
                fill
                sizes="264px"
                quality={100}
                priority
              />
            </div>
            <h1 className="title">Ivan Shishkin</h1>
            <p className="hero-bio">
              I study computer science at the University of California, Irvine,
              with a specialization in Artificial Intelligence. This site is here for you to get to know me so please, look around.
            </p>
            <p className="hero-principle">
              <em>
                <a
                  href="https://usefulfictions.substack.com/p/how-to-increase-your-surface-area"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Do more
                </a>
                ,{" "}
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
            <FeedbackForm />
          </div>
        </div>
      </section>

      <SiteFooter home />
    </main>
  );
}
