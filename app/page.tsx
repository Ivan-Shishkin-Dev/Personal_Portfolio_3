import Image from "next/image";
import Link from "next/link";
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
                sizes="(max-width: 769px) 200px, (max-width: 1307px) 26vw, 340px"
                quality={100}
                priority
              />
            </div>
            <h1 className="title">Ivan Shishkin</h1>
            <p className="hero-bio">
              I’m an honors Computer Science student at UC Irvine. I like to do
              a lot of things though,{" "}
              <Link href="/about">learn more</Link>.
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
