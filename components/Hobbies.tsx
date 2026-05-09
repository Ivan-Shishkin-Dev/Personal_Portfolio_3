import Link from "next/link";
import HobbyItem from "./HobbyItem";
import LiftingDetail from "./LiftingDetail";
import GamesDetail from "./GamesDetail";
import SpotifyOnRepeat from "./SpotifyOnRepeat";

export default function Hobbies() {
  return (
    <>
      <h2>Hobbies</h2>

      <section className="hobby-category">
        <div className="hobby-category-title">Physical Activity</div>
        <ul className="hobbies">
          <HobbyItem
            title="Lifting"
            summary="Bodybuilding (the sport, and trying to emulate it), walking, sleep, tracking, exercise selection."
          >
            <LiftingDetail />
          </HobbyItem>

          <HobbyItem
            title="Sports"
            summary="Down for most."
          >
            <p>
              Football, soccer, frisbee, hiking, basically anything someone throws at me (see what I did there).
            </p>
          </HobbyItem>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Tech and Building</div>
        <ul className="hobbies">
          <HobbyItem
            title="AI"
            summary="Building, following safety, experimenting as the field moves."
          >
            <p>
              Building with AI and its subsidiaries using the newest tooling
              (MCP servers, agentic workflows, stuff of that sort). Following safety
              research (thank you{" "}
              <a
                href="https://helenatran.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Helena
              </a>{" "}
              and{" "}
              <a
                href="https://harrywaterman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harry
              </a>{" "}
              for introducing me, still in the early stages of going deeper). Research
              for AI literacy curriculum through UCI&apos;s Digital Learning Lab.
              Experimenting with new models as they ship.
            </p>
          </HobbyItem>

          <HobbyItem
            title="Full-stack development"
            summary="My training ground for applying AI development."
          >
            <p>
              At this point I can build almost anything quickly. This bullet is a
              catch-all for &ldquo;application of AI development.&rdquo; It is where the
              ideas from the AI bucket get tested in real code, real users, and real
              deployments.
            </p>
          </HobbyItem>

          <HobbyItem
            title="Tinkering"
            summary="Nerdy stuff that makes things better."
          >
            <p>
              Building PCs, Linux, Neovim (early days), anything in that genre. I just
              love to tinker and see how to make things better.
            </p>
          </HobbyItem>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Games</div>
        <ul className="hobbies">
          <HobbyItem
            title="Video games"
            summary="Lots played over the years; lately I lean into comfort loops."
          >
            <GamesDetail />
          </HobbyItem>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Mind and Growth</div>
        <ul className="hobbies">
          <HobbyItem
            title="Self-education"
            summary="A core part of my identity."
          >
            <p>
              I really want to get good at things so I spend my time learning from
              people smarter than me. A lot of this gets covered on my{" "}
              <Link href="/media">Media page</Link>. The mix: reading (recently picked
              it up again), podcasts (I walk a lot, so they fit naturally), long
              conversations with people unlike me, philosophy. Also: long-form YouTube
              essays and lectures, blogs and Substacks, Twitter/X for live discourse in
              AI and tech, online courses.
            </p>
          </HobbyItem>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Creative / Personal</div>
        <ul className="hobbies">
          <HobbyItem
            title="Music"
            summary="I like it, mostly as background noise."
          >
            <p>More functional than emotional most of the time.</p>
            <SpotifyOnRepeat />
          </HobbyItem>
        </ul>
      </section>
    </>
  );
}
