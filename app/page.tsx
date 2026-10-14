import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import FeedbackForm from "@/components/FeedbackForm";
import Headshot from "@/components/Headshot";
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
    <main className="page page-home" data-screen-label="Home">
      <section className="home">
        <header className="home-head">
          <Headshot />
          <div className="home-id">
            <h1 className="home-name">Ivan Shishkin</h1>
            <ul className="link-row">
              {contacts.map((c) => (
                <li key={c.intent}>
                  {c.copy ? (
                    <CopyLink label={c.intent} value={c.copy} />
                  ) : (
                    <Ext href={c.href!}>{c.label}</Ext>
                  )}
                </li>
              ))}
              <li><FeedbackForm /></li>
            </ul>
          </div>
        </header>

        <div className="home-text">
          <p className="home-lede">
            I&rsquo;m a computer science student at UC Irvine. I care most
            about{" "}
            <Ext href="https://80000hours.org/problem-profiles/artificial-intelligence/">
              reducing risks from AI systems
            </Ext>
            , and I help run the{" "}
            <Ext href="https://aisafetyuci.org/team">AI Safety Collective at UCI</Ext>.
          </p>
          <p>
            I try to{" "}
            <Ext href="https://usefulfictions.substack.com/p/how-to-increase-your-surface-area">
              get lucky on purpose
            </Ext>{" "}
            and{" "}
            <Ext href="https://www.benkuhn.net/abyss/">
              look directly at what scares me
            </Ext>
            .
          </p>
          <p>
            Most of my time goes to three things. With AI, I build using the
            newest tooling, try new models as they ship, and follow safety
            research. With software, my{" "}
            <Link href="/projects">projects</Link> are where those ideas get
            tested. And I spend a lot of time learning from people smarter
            than me: reading, podcasts on long walks, and long conversations
            with people unlike me. Much of that shows up under{" "}
            <Link href="/education#self-education">self-education</Link>.
          </p>
          <p>
            I grew up in Russia as the &ldquo;math guy,&rdquo; somewhere that
            rewarded resilience over comfort. It made me someone who acts on
            life rather than reacts to it.
          </p>
          <p>
            Outside of that I lift, tinker with PCs, Linux, and Neovim, and
            sometimes get <Ext href="https://xkcd.com/356/">nerd sniped</Ext>.
            This isn&rsquo;t all that I do, so talk to me to find out more.
          </p>
        </div>

        <SiteNav home />
      </section>

      <SiteFooter />
    </main>
  );
}
