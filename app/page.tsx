import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import FeedbackForm from "@/components/FeedbackForm";
import Headshot from "@/components/Headshot";
import Topbar from "@/components/Topbar";
import TerminalButton from "@/components/TerminalButton";
import CopyLink from "@/components/CopyLink";
import { contacts } from "@/content/contacts";

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="page page-home" data-screen-label="Home">
        <section className="home">
          <header className="home-head">
            <Headshot />
            <div className="home-id">
              <h1 className="home-name">Ivan Shishkin</h1>
              <dl className="properties">
                {contacts.map((c) => (
                  <div key={c.intent}>
                    <dt>{c.label ?? c.intent}</dt>
                    <dd>
                      {c.copy ? (
                        <CopyLink label={c.handle} value={c.copy} />
                      ) : (
                        <Ext href={c.href!}>{c.handle}</Ext>
                      )}
                    </dd>
                  </div>
                ))}
                <div>
                  <dt>Feedback</dt>
                  <dd><FeedbackForm /></dd>
                </div>
              </dl>
            </div>
          </header>

          <section className="tldr" aria-labelledby="tldr">
            <h2 id="tldr">TL;DR</h2>
            <ul>
              <li>I&rsquo;m an honors computer science student at UC Irvine.</li>
              <li>
                I help direct the{" "}
                <Ext href="https://aisafetyuci.org/team">AI Safety Collective at UC Irvine</Ext>{" "}
                and think it&rsquo;s the most important thing I could be working on.
              </li>
              <li>
                I&rsquo;ve done software engineering and research with the{" "}
                <Link href="/experience#digital-learning-lab">Digital Learning Lab</Link>{" "}
                here on campus.
              </li>
              <li>
                Outside of work and school, I lift religiously, just got into
                running, and love tinkering with nerdy CS stuff (Neovim, tmux,
                AeroSpace, etc.).
              </li>
              <li>
                I like to read. Check out more at{" "}
                <Link href="/consumed-content">consumed content</Link>.
              </li>
            </ul>
          </section>

          <TerminalButton variant="hint" />

          <div className="home-text">
            <p>
              Someone stuck around! Just kidding. Like I mentioned above, I care
              about making sure{" "}
              <Ext href="https://80000hours.org/problem-profiles/artificial-intelligence/">
                AI goes well for humanity
              </Ext>
              . The way I&rsquo;m currently doing that is by helping direct the{" "}
              <Ext href="https://aisafetyuci.org/team">AI Safety Collective</Ext>,
              although I&rsquo;ve had previous stints doing other work in the AI
              safety space and am always looking for more opportunities.
            </p>
            <p>
              Something that generally summarizes me as a person: I try to{" "}
              <Ext href="https://usefulfictions.substack.com/p/how-to-increase-your-surface-area">
                get lucky on purpose
              </Ext>{" "}
              and{" "}
              <Ext href="https://www.benkuhn.net/abyss/">
                look directly at what scares me
              </Ext>
              . I also tend to be pathologically ambitious, for better and for
              worse. I love to get things done quickly, efficiently, and with
              great care. Something I had on my previous website said: I grew up
              in conditions that rewarded resilience over comfort, which made me
              someone who acts on life rather than reacts to it.
            </p>
            <p>
              I&rsquo;m also a lifelong learner. I never want the learning I do
              in life to be confined by my major. I enjoy learning all sorts of
              things: tech, philosophy, biology (roughly), biomechanics (big
              words for lifting), nutrition, rationality (new pickup), and many
              others. I do this by surrounding myself with people much better
              than me and learning through osmosis.
            </p>
          </div>

          <SiteNav />
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
