import Link from "next/link";
import HobbyItem from "./HobbyItem";
import SpotifyOnRepeat from "./SpotifyOnRepeat";

export default function Hobbies() {
  return (
    <>
      <section className="hobby-category">
        <div className="hobby-category-title">Tech and Building</div>
        <ul className="hobbies">
          <HobbyItem
            alwaysOpen
            title="AI"
            summary="Building, following safety, experimenting as the field moves."
          >
            <ul>
              <li>
                Building with AI and its subsidiaries using the newest tooling
                (MCP servers, agentic workflows, stuff of that sort). Experimenting
                with new models as they ship.
              </li>
              <li>
                Following safety research and the field, as I am one of the directors
                of the AI Safety Collective @ UCI.
              </li>
              <li>
                Research for AI literacy curriculum through UCI&apos;s Digital Learning
                Lab.
              </li>
            </ul>
          </HobbyItem>

          <HobbyItem
            alwaysOpen
            title="Full-stack Development"
            summary="My training ground for applying AI development."
          >
            <ul>
              <li>
                At this point I can build almost anything quickly. This bullet is a
                catch-all for &ldquo;application of AI development.&rdquo; It is where the
                ideas from the AI bucket get tested.
              </li>
            </ul>
          </HobbyItem>

          <HobbyItem
            alwaysOpen
            title="Tinkering"
            summary="Nerdy stuff that makes things better."
          >
            <ul>
              <li>
                Building PCs, Linux, Neovim, anything in that genre. I just love to
                tinker and see how to make things better.
              </li>
              <li>
                A min-maxer sorta guy who sometimes gets{" "}
                <a
                  href="https://xkcd.com/356/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nerd sniped
                </a>
                .
              </li>
            </ul>
          </HobbyItem>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Mind and Growth</div>
        <ul className="hobbies">
          <HobbyItem
            alwaysOpen
            title="Self-education"
            summary="A core part of my identity."
          >
            <ul>
              <li>
                I want to get good at things, so I spend my time learning from people
                smarter than me. A lot of it shows up on my{" "}
                <Link href="/media">Media page</Link>.
              </li>
              <li>
                The mix: reading, podcasts (I walk a lot,
                so they fit), long conversations with people unlike me,
                &ldquo;philosophy.&rdquo;
              </li>
              <li>
                Also: long-form YouTube essays and lectures, blogs and Substacks,
                Twitter/X for live AI and tech discourse.
              </li>
            </ul>
          </HobbyItem>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Creative / Personal</div>
        <ul className="hobbies">
          <HobbyItem
            alwaysOpen
            title="Music"
            summary="I like it, mostly as background noise."
          >
            <SpotifyOnRepeat />
          </HobbyItem>
        </ul>
      </section>
    </>
  );
}
